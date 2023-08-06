from depscan.lib import config as config


def create_pkg_variations(pkg_dict):
    """
    Method to create variations of the given package by considering vendor and package aliases

    :param pkg_dict: Dict containing package vendor, name and version
    :return: List of possible variations to the package
    """
    pkg_list = []
    vendor_aliases = set()
    name_aliases = set()
    vendor = pkg_dict.get("vendor")
    name = pkg_dict.get("name")
    if vendor:
        vendor_aliases.add(vendor)
        if (
            vendor.startswith("org.")
            or vendor.startswith("io.")
            or vendor.startswith("com.")
            or vendor.startswith("net.")
        ):
            tmpA = vendor.split(".")
            # Automatically add short vendor forms
            if len(tmpA) > 2 and len(tmpA[1]) > 3:
                vendor_aliases.add(tmpA[1])
        for k, v in config.vendor_alias.items():
            if vendor in k or k in vendor:
                vendor_aliases.add(k)
                vendor_aliases.add(v)
    name_aliases.add(name)
    name_aliases.add(name.replace("-", "_"))
    if "-core" in name:
        name_aliases.add(name.replace("-core", ""))
    for k, v in config.package_alias.items():
        if name in k or k in name:
            name_aliases.add(k)
            name_aliases.add(v)
    if len(vendor_aliases):
        for vvar in list(vendor_aliases):
            for nvar in list(name_aliases):
                pkg_list.append(
                    {
                        "vendor": vvar,
                        "name": nvar,
                        "version": pkg_dict.get("version"),
                        "licenses": pkg_dict.get("licenses"),
                    }
                )
    else:
        for nvar in list(name_aliases):
            pkg_list.append(
                {
                    "vendor": pkg_dict.get("vendor"),
                    "name": nvar,
                    "version": pkg_dict.get("version"),
                    "licenses": pkg_dict.get("licenses"),
                }
            )
    return pkg_list


def dealias_packages(pkg_list, pkg_aliases):
    """Method to dealias package names by looking up vendor and name information
    in the aliases list

    :param pkg_list: List of packages to dealias
    :param pkg_aliases: Package aliases
    """
    if not pkg_aliases:
        return {}
    dealias_dict = {}
    for res in pkg_list:
        package_issue = res.package_issue
        full_pkg = package_issue.affected_location.package
        if package_issue.affected_location.vendor:
            full_pkg = "{}:{}".format(
                package_issue.affected_location.vendor,
                package_issue.affected_location.package,
            )
        for k, v in pkg_aliases.items():
            if full_pkg in v:
                dealias_dict[full_pkg] = k
                break
    return dealias_dict
