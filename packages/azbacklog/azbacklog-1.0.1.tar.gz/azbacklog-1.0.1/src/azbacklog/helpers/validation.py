from .parser import Parser


class Validation():

    def _validate_title(self, path, meta) -> []:
        if "title" not in meta:
            return (False, f"'title' property not found in metadata '{path}'")
        if not Parser().isvalid_string(meta["title"]):
            return (False, f"'title' property not formatted correctly in metadata '{path}'")
        return True

    def _validate_description(self, path, meta) -> []:
        if "description" not in meta:
            return (False, f"'description' property not found in metadata '{path}'")
        if not Parser().isvalid_string(meta["description"], True):
            return (False, f"'description' property not formatted correctly in metadata '{path}'")
        return True

    def _validate_tags(self, path, meta, config) -> []:
        if "tags" not in meta:
            return (False, f"'tags' property not found in metadata '{path}'")

        if not isinstance(meta["tags"], list):
            return (False, f"'tags' property is not in correct format in metadata '{path}'")

        for prop in meta["tags"]:
            if prop not in config["tags"]:
                return (False, f"invalid tag '{prop}' in metadata '{path}'")

        return True

    def _validate_roles(self, path, meta, config) -> []:
        if "roles" not in meta:
            return (False, f"'roles' property not found in metadata '{path}'")

        if not isinstance(meta["roles"], list):
            return (False, f"'roles' property is not in correct format in metadata '{path}'")

        for prop in meta["roles"]:
            if prop not in config["roles"]:
                return (False, f"invalid role '{prop}' in metadata '{path}'")

        return True

    def validate_metadata(self, path, json, config) -> []:
        if json is None:
            return (False, f"metadata in '{path}' is empty")

        valid_title = self._validate_title(path, json)
        if (valid_title is not True):
            return valid_title

        valid_desc = self._validate_description(path, json)
        if (valid_desc is not True):
            return valid_desc

        valid_tags = self._validate_tags(path, json, config)
        if (valid_tags is not True):
            return valid_tags

        valid_roles = self._validate_roles(path, json, config)
        if (valid_roles is not True):
            return valid_roles

        return True

    def validate_config(self, path, json, repo_type=None) -> []:
        config_options = [
            "description",
            "tags",
            "roles",
            "#tagcolors"
        ]

        allowed_config = list(map(lambda x: x[1:] if x[0] == '#' else x, config_options))
        required_config = list(filter(lambda x: x[0] != '#', config_options))

        if json is None:
            return (False, f"configuration in '{path}' is empty")

        for key in json.keys():
            if key not in allowed_config:
                return (False, f"value '{key}' not allowed in configuration '{path}'")

        for key in required_config:
            if key not in json.keys():
                return (False, f"expected value '{key}' not found in configuration '{path}'")

        if repo_type == 'github' or repo_type == 'validate':
            if 'tagcolors' not in json.keys():
                return (False, f"GitHub requires value 'tagcolors' in configuration '{path}'")

            if len(json["tagcolors"]) != len(json["tags"]) + len(json["roles"]):
                return (False, "length of 'tagcolors' should equal the combined number of tags and roles")

        return True
