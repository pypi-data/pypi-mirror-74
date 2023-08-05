from abc import ABC, abstractmethod
import os
from . import ztpllogging
import yaml
from yaml import scanner
import csv
import json
from functools import reduce
from . import SPECIAL_KEYS


class Configurator(object):

    @staticmethod
    def get_translation(config_file_location, *args, **kwargs):
        """
        Static function to enable translation of input files to map correctly to the in-memory hash used for the application. This function is used to translate from multiple file types to the in-memory dictionary that works with the initial yaml config. If a new translation is necessary, a new ConfigTranslator class needs to be built in this module and then the call can be proxied here by adding the specific call to that class's required translate() function

        :param config_file_location: Location describing where the configuration file is located
        :type config_file_location: str
        :param args: Default argument listing provided by python. This can be used for the CSV Translator. See that class's docs for more information
        :type args: list
        :param kwargs: Default k:v listing provided by python. This can be used for the CSV Translator. See that class's docs for more information
        :type kwargs: dict
        :return: Dictionary output provided by the proxied class's translate() function
        :rtype: dict
        """
        extension = os.path.splitext(config_file_location)[1]
        if extension.lower() == ".csv":
            return CSVConfigTranslator(config_file_location).translate(*args, **kwargs)
        elif extension.lower() == ".json":
            return JSONConfigTranslator(config_file_location).translate(*args, **kwargs)
        elif extension.lower() == ".yaml" or extension.lower() == ".yml":
            return YAMLConfigTranslator(config_file_location).translate(*args, **kwargs)
        else:
            return None

    @staticmethod
    def get_instruction_for_fgt(full_instruction_ref, fgt_sn, original_fgt_sn, config_instruction_str=None):
        """
        Retrieves the list of dictionaries of instructions from the texttocode instructions file. Will perform a recursive look in case the texttocode file has a USES instruction. Converts the standard list to a tuple so it is immutable throughout the application

        :param full_instruction_ref: Reference to the entire texttocode file that has already been turned into an in-memory dict by the get_translation function
        :type full_instruction_ref: dict
        :param fgt_sn: Serial number of the FGT that is being looked for in the dictionary - will be a key if it exists
        :type fgt_sn: str
        :param original_fgt_sn: Serial number of the FGT that is being looked for in the dictionary - will always store the fgt sn in question
        :type original_fgt_sn: str
        :param config_instruction_str: String representation of a template in the instructions file or None if the YAML file has no pointer to a default instruction
        :type config_instruction_str: str or None
        :return: Array of instructions for a specific FGT or None. Format example is ({'ACTION': 'PromoteDevice', 'DATA_REQ': []}, {'COMMAND': 'AssignDeviceToGroup', 'DATA_REQ': ['devicename', 'adom']})
        :rtype: tuple or None
        """
        logging_ref = ztpllogging.get_logger()
        fgt_information = full_instruction_ref.get(fgt_sn, None)
        # an entry was provided in the YAML file
        if config_instruction_str is not None:
            if full_instruction_ref.get(config_instruction_str, None) is None:
                logging_ref.warning(
                    f"An attempt failed to retrieve instructions for the FGT with Serial Number {original_fgt_sn}. "
                    f"The failure occurred because the FGT configuration file stated that it would use the "
                    f"{config_instruction_str} instruction template, but that template does not exist in the "
                    f"instruction file.")
                return None
            return Configurator.get_instruction_for_fgt(full_instruction_ref, config_instruction_str, original_fgt_sn)
        # entry not provided in the YAML file
        else:
            # a fgt sn is listed in the instructions file
            if fgt_information is not None:
                if fgt_information.get("USES", None) is not None:
                    return Configurator.get_instruction_for_fgt(full_instruction_ref, fgt_information["USES"],
                                                                original_fgt_sn)
                else:
                    logging_ref.info(f"Found instructions for FGT identified as {original_fgt_sn}. "
                                     f"Providing instructions from a template named {fgt_sn}....")
                    # "configuration.devicename" and "configuration.adom" must be in all returns
                    for cmd in fgt_information["INSTRUCTIONS"]:
                        if not cmd.get("DATA_REQ", False):
                            cmd["DATA_REQ"] = ["configuration.devicename", "configuration.adom"]
                        else:
                            if "configuration.devicename" not in cmd["DATA_REQ"]:
                                cmd["DATA_REQ"].append("configuration.devicename")
                            if "configuration.adom" not in cmd["DATA_REQ"]:
                                cmd["DATA_REQ"].append("configuration.adom")
                    return tuple(fgt_information["INSTRUCTIONS"])
            # a fgt sn is not listed in the instructions file
            else:
                try:
                    default_uses_str = full_instruction_ref["DEFAULT"]["USES"]
                except KeyError:
                    default_uses_str = None
                if default_uses_str is None:
                    logging_ref.warning(
                        f"An attempt failed to retrieve instructions for the FGT with Serial Number {original_fgt_sn}. "
                        f"Since there is no DEFAULT configuration in the instructions file, an explicit set "
                        f"of actions needs to be configured for the FGT and that is not currently in the "
                        f"instructions file.")
                    return None
                else:
                    if full_instruction_ref.get(default_uses_str, None) is None:
                        logging_ref.warning(
                            f"An attempt failed to retrieve instructions for the FGT with Serial Number "
                            f"{original_fgt_sn}. While there is a DEFAULT configuration in the instructions file, "
                            f"the specific template called is {default_uses_str} which does not exist as a valid "
                            f"template in the instructions file. Ensure there is no spelling error in your DEFAULT "
                            f"value in the instructions file.")
                        return None
                    return Configurator.get_instruction_for_fgt(full_instruction_ref, default_uses_str, original_fgt_sn)

    @staticmethod
    def get_adhoc_data_for_fgt(full_instruction_ref, fgt_sn):
        """
        Provides the *ADHOC_DATA* dictionary if there is one to the program. This allows the engineer to add a keyword:value dictionary to the instruction and have it sent to the Action object. This is specifically used in the Jinja templates on the ExecuteLocalCLIScript Command object

        :param full_instruction_ref: Reference to the entire texttocode file that has already been turned into an in-memory dict by the get_translation function
        :type full_instruction_ref: dict
        :param fgt_sn: Serial number of the FGT that is being looked for in the dictionary - will be a key if it exists
        :type fgt_sn: str
        :return: Variable data dictionary provided by the engineer in a specific instruction. Structure *MUST BE* {"ADHOC_DATA": {"test": "otherstuff", "test2": "morestuff"}}
        :rtype: dict
        """
        fgt_information = full_instruction_ref.get(fgt_sn, None)
        if fgt_information is not None:
            return fgt_information.get("ADHOC_DATA", None)
        return None

    @staticmethod
    def match_lists(sn_list, unreg_device_list):
        """
        Matches two provided lists and returns a list representative of any that matched. This is used to take a
        list of serial numbers provided normally through the YAML config file for lists of FGTs and matching it to a list
        of unregistered serial numbers provided by a GET to a FMG

        :param sn_list: List of serial numbers sent in from a config file of legal FGT serial numbers
        :type sn_list: list
        :param unreg_device_list: List of serial numbers sent in from a FMG - used here from an unregistered device GET
        :type unreg_device_list: list
        :return: list of serial numbers
        :rtype: list
        """
        return list(set(sn_list) & set(unreg_device_list))

    @staticmethod
    def __deep_get(dictionary, keys, default=None):
        """
        Splits dictionary items despite depth
        """
        return reduce(lambda d, key: d.get(key, default) if isinstance(d, dict) else default,
                      keys.split("."), dictionary)

    @staticmethod
    def config_key_val_finder(config_data_dict, keys_to_find_list):
        """
        Static function that allows text from the texttocode file to translate into dictionary items pulled from the configuration file. An example of this would be if the user wanted to get the 'provisioned' and the 'adom' value from the configuration information for a particular FGT. Since 'provisioned' is a top-level key in the configuration file and the 'adom' value is nested in the 'configuration' key, the texttocode instruction file would have {"DATA_REQ": ['provisioned', 'configuration.adom']} listed for the action. This will return a single level dictionary that can be used within the code calls

        Special keys that must have a common name as the root of their tree are:

        **"cli_script_groups", "cli_template_groups", "local_cli_scripts", "vdom_lists", "group_lists", "firmware_objects", "timers"**

        :param config_data_dict: Configuration data for a specific FGT entry from the configuration file
        :type config_data_dict: dict
        :param keys_to_find_list: Keys that need to be found. Nested keys are found using dot-notation, so the pol_pkg key would be found by using 'templates.pol_pkg'
        :type keys_to_find_list: list
        :return: A single-level dictionary with all the keys and values requested pulled from the config_data_dict parameter no matter how nested
        :rtype: dict
        """
        logging_ref = ztpllogging.get_logger()
        info_needed_dict = {}
        for key in keys_to_find_list:
            if "." in key:
                new_key = key.rsplit(".", 1)[1]
                # if this is a list it needs to be named and then provide the array
                list_key = [i for i in key.split(".") if i in SPECIAL_KEYS]
                val = Configurator.__deep_get(config_data_dict, key, default=None)
                if len(list_key) > 0:
                    new_key = list_key[0]
            else:
                new_key = key
                val = config_data_dict.get(key, None)
            if val is not None:
                info_needed_dict[new_key] = val
            else:
                logging_ref.warning(f"The application was unable to retrieve a valid value for the key '{key}' from "
                                    f"the configuration file as listed in the instruction file provided. The "
                                    f"application will return that there is no information for this call and will "
                                    f"not provision this FGT. This was probably caused by the instruction file "
                                    f"not having the correct DATA_REQ values listed to provide the information needed. "
                                    f"Please correct the instruction file or ensure the correct information is in the "
                                    f"configuration file for this entry.")
                return None
        return info_needed_dict


class BaseConfigTranslator(ABC):
    """
    The BaseClass for a configuration translator. This class ensures all classes that do configuration translation have a translate() function so that translation can be called despite any knowledge of the translator from the receiving or calling class

    :param config_location: Location on the filesystem where the config file can be found
    :type config_location: str
    """

    def __init__(self, config_location):
        super().__init__()
        self._config_location = config_location
        self._logging_ref = ztpllogging.get_logger()

    @property
    def config_location(self):
        """
        Simple get property for the configuration location. Checks for if the file actually exists. If not will return None.

        :return: OS location for configuration file
        :rtype: str
        """
        return self._config_location if os.path.isfile(self._config_location) else None

    @abstractmethod
    def translate(self, *args, **kwargs):
        """
        Serves as the action to translate in subclasses. Not a concrete method here but allows for the code to accept many translation classes that map to the YAML config that is utilized in the code

        :param args: Established to ensure scalability. Not used currently
        :type args: list
        :param kwargs: Established to ensure scalability. Not used currently
        :type kwargs: dict
        """
        pass

    def report_exception(self, reporter):
        """
        The report issue function is a base function that is used to report a problem with any and all sub-configuration classes.
        :param reporter:
        :type reporter:
        """
        self._logging_ref.error(f"There was an exception handled by the translate function "
                                f"of {reporter.__class__.__name__}. There is a problem with translating the config "
                                f"file that was provided. Ensure {self.config_location} exists and is "
                                f"properly configured.")


class YAMLConfigTranslator(BaseConfigTranslator):
    """
    The YAML configuration translator. Provides the configuration dictionary from YAML configuration file.

    :param config_location: Location on the filesystem where the config file can be found
    :type config_location: str
    """

    def __init__(self, config_location):
        super().__init__(config_location)

    def translate(self, *args, **kwargs):
        """
        Return dictionary representation of YAML configuration file if configuration exists. Any exception raised will force a response of None

        :param args: Not used. Maintained for scale
        :type args: list
        :param kwargs: Not used. Maintained for scale
        :type kwargs: dict
        :return: Dictionary representation of configuration file or None if an exception is raised
        :rtype: dict | None
        """
        if self.config_location is None:
            return None
        else:
            try:
                with open(self.config_location, mode="rt") as y_file:
                    return yaml.full_load(y_file)
            except yaml.scanner.ScannerError as yer:
                self._logging_ref.error(f"There was a YAML scanner exception handled by the translate function "
                                        f"of {self.__class__.__name__}. This normally means the YAML provided in the "
                                        f"file is incorrectly formatted. Ensure {self.config_location} is proper YAML. "
                                        f"The message of the exception is {str(yer)}")
                return None
            except:
                self.report_exception(self)
                return None


class JSONConfigTranslator(BaseConfigTranslator):
    """
    Currently Not Implemented - will throw error if used
    The JSON configuration translator. Provides the configuration dictionary from JSON configuration file.

    :param config_location: Location on the filesystem where the config file can be found
    :type config_location: str
    """

    def __init__(self, config_location):
        super().__init__(config_location)

    def translate(self, *args, **kwargs):
        """
        Return dictionary representation of JSON configuration file if configuration exists. Any exception raised will force a response of None

        :param args: Not used. Maintained for scale
        :type args: list
        :param kwargs: Not used. Maintained for scale
        :type kwargs: dict
        :return: Dictionary representation of configuration file or None if an exception is raised
        :rtype: dict | None
        """
        if self.config_location is None:
            return None
        else:
            try:
                with open(self.config_location, mode="rt") as y_file:
                    return json.load(y_file)
            except json.decoder.JSONDecodeError as jde:
                self._logging_ref.error(f"There was a JSON decoder exception handled by the translate function "
                                        f"of {self.__class__.__name__}. This normally means the JSON provided in the "
                                        f"file is incorrectly formatted. Ensure {self.config_location} is proper JSON. "
                                        f"The message of the exception was {str(jde)}")
                return None
            except:
                self.report_exception(self)
                return None


class CSVConfigTranslator(BaseConfigTranslator):
    """
    Currently Not Implemented - will throw error if used
    The CSV configuration translator. Provides the configuration dictionary from a specific CSV configuration file.

    :param config_location: Location on the filesystem where the config file can be found
    :type config_location: str
    """

    def __init__(self, config_location):
        super().__init__(config_location)

    def __mandatory_columns_exist_in_csv(self, keys_in_question,
                                         mandatory_columns=("Has Been Provisioned", "Serial Number", "ADOM",
                                                            "Device Name")):
        """
        Tests that all header information is provided in the CSV file. For this implementation, mandatory columns are defaulted as "Has Been Provisioned", "Serial Number", "ADOM", "Device Name". Only one Zone Mapping is allowed with the default CSV version

        :param keys_in_question: List of header names in CSV file - essentially keys to the columns
        :type keys_in_question: list
        :param mandatory_columns: Listing of mandatory columns to be used in CSV mapping. Defaults are "Has Been Provisioned", "Serial Number", "ADOM", and "Device Name"
        :type mandatory_columns: tuple
        :return: If all headers are provided True. If header(s) is missing False
        :rtype: bool
        """
        miss_clm_list = []
        for column_name in mandatory_columns:
            if column_name not in keys_in_question:
                miss_clm_list.append(column_name)
        if miss_clm_list:
            self._logging_ref.error(f"Missing column{'s' if len(miss_clm_list) > 1 else ''} dicovered in the "
                                    f"CSV. This translation requires the column{'s' if len(miss_clm_list) > 1 else ''} "
                                    f"{', '.join(miss_clm_list)} to be in the CSV file.")
            return False
        return True

    def translate(self, *args, **kwargs):
        """
        Return dictionary representation of CSV configuration file if configuration exists. Any exception raised will force a response of None.

        :param args: Args are used as a mandatory list capability. By default the mandatory columns are "Has Been Provisioned", "Serial Number", "ADOM", and "Device Name". However, if args is used in the call to this function those arguments will be sent in as the required columns allowing for the column names to be changed with ease
        :type args: list
        :param kwargs: A dictionary with the following format will utilize the "metadata" list as simple regular expressions to label meta data fields {"metadata": [list, of, simple, terms]}. For instance, if a user wants "meta ", "vars ", and "new " to mean that this is a column that should be seen as metadata the kwargs value will be {"meta": ["meta", "vars", "new"]}. So a column named `meta ip` would be found as meta data in this case. Notice that the space is important. Metadata header names will have any spaces within the name filled with underscores, i.e. meta this field will be assigned to the FMG as meta_this_field
        :type kwargs: dict
        :return: Dictionary representation of configuration file or None if an exception is raised
        :rtype: dict | None
        :raises: KeyError
        """
        raise NotImplementedError
        try:
            memory_hash = {}
            with open(self.config_location, "r", encoding="utf-8-sig") as fil:
                mgd_devices = csv.DictReader(fil, delimiter=",")
                for m in mgd_devices:
                    if m:
                        if not self.__mandatory_columns_exist_in_csv(m, args):
                            return None
                        if m["Has Been Provisioned"].lower().strip() != "y":
                            if kwargs:
                                if kwargs.get("meta", None) is not None:
                                    new_meta_list = [x.lower() for x in kwargs["meta"]]
                                    meta_data = {meta_key.strip().replace(" ", "_").lower(): meta_val.strip() for
                                                 (meta_key, meta_val) in m.items() if
                                                 meta_key.lower().split(" ", 1)[0] in new_meta_list and meta_val != ""}
                            else:
                                meta_data = {meta_key.strip().replace(" ", "_").lower(): meta_val.strip() for
                                             (meta_key, meta_val) in m.items() if
                                             "meta " in meta_key.lower() and meta_val != ""}
                            memory_hash[m["Serial Number"].strip()] = {
                                "adom": m["ADOM"].strip(),
                                "groups": [grp.strip() for grp in m.get("Groups", "").split(",")],
                                "devicename": m["Device Name"].strip(),
                                "device_pw": m.get("Device PW", "").strip(),
                                "meta": {
                                    "Company/Organization": m.get("Company", "").strip(),
                                    "Contact Email": m.get("EMail", "").strip(),
                                    "Contact Phone Number": m.get("Phone", "").strip(),
                                    "Address": m.get("Address", "").strip(),
                                },
                                "templates": {
                                    "cli_script_groups": [scr.strip() for scr in
                                                          m.get("CLI Script Groups", "").split(",")],
                                    "cli_template_groups": [{"name": clitg.strip(), "execute": "Y", "remain": "N"} for
                                                            clitg
                                                            in m.get("CLI Template Groups", "").split(",")],
                                    "pol_pkg": m.get("Policy Pkg", "").strip(),
                                    "sd_wan": m.get("SDWAN Template", "").strip(),
                                    "local_cli_scripts": [{"name": cuscr.strip(), "on_db": "N"} for cuscr in
                                                            m.get("Local CLI Scripts", "").split(",")]
                                },
                            }
                            if m.get("Address Map Names", None) is not None:
                                memory_hash["address_maps"] = [
                                    {"name": x.strip(), "address": m["Address Map IPs"].split(",")[i].strip(),
                                     "subnet": m["Address Map Masks"].split(",")[i].strip()} for i, x in
                                    enumerate(m["Address Map Names"].split(","))]
                            if m.get("Zone Map Name") is not None:
                                memory_hash["zone_maps"] = [{"name": m["Zone Map Name"].strip(),
                                                             "interfaces": [x.strip() for x in
                                                                            m["Zone Map Interfaces"].split(",")]}]
                            if m.get("VIP Name") is not None:
                                memory_hash["vips"] = [
                                    {"name": x.strip(), "ext_range": m["VIP Ext Range"].split(",")[i].strip(),
                                     "map_range": m["VIP Map Range"].split(",")[i].strip()} for i, x in
                                    enumerate(m["VIP Name"].split(","))]
                            if meta_data:
                                memory_hash[m["Serial Number"]]["meta"].update(meta_data)
                return memory_hash
        except KeyError as ker:
            self._logging_ref.error(f"A key exception was caught during the translation of the CSV file into a "
                                    f"valid dictionary that can be utilized. Processing will cease as the "
                                    f"configuration cannot be read. Exception information is: {ker}")
            return None
        except:
            self.report_exception(self)
            return None


class XMLConfigTranslator(BaseConfigTranslator):
    """
    Currently Not Implemented - will throw error if used
    The XML configuration translator. Not currently implemented.

    :param config_location: Location on the filesystem where the config file can be found
    :type config_location: str
    """

    def __init__(self, config_location):
        super().__init__(config_location)

    def translate(self, *args, **kwargs):
        raise NotImplementedError
