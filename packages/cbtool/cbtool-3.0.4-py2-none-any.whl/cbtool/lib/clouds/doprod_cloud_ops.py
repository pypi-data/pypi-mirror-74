#!/usr/bin/env python

#/*******************************************************************************
# Copyright (c) 2015 DigitalOcean, Inc.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#    http://www.apache.org/licenses/LICENSE-2.0
#
#/*******************************************************************************

'''
    Created on May 17, 2018
    DigitalOcean Internal-only Object Operations Library
    @author: Michael R. Galaxy
'''
from lib.auxiliary.code_instrumentation import trace, cbdebug, cberr, cbwarn, cbinfo, cbcrit

from .do_cloud_ops import DoCmds

class DoprodCmds(DoCmds) :
    @trace
    def pre_vmcreate_process(self, obj_attr_list, credentials_list, keys) :
        vmc_name = obj_attr_list["vmc_name"]
        ex_create_attr = False

        _vmc_defaults = self.osci.get_object(obj_attr_list["cloud_name"], "GLOBAL", False, "vmc_defaults", False)

        # Support mixed regions, allow VMs to be placed anywhere in the region
        # while simultaneously supporting force creates.

        if len(vmc_name) > 4 and "server_ids" in _vmc_defaults :
            for entry in _vmc_defaults["server_ids"].split(",") :
                if entry.count(":") :
                    name, server_id = entry.split(":")
                    if name == vmc_name :
                        ex_create_attr = int(server_id)
                        obj_attr_list["region"] = vmc_name[:4]
                        break

        obj_attr_list["region"] = obj_attr_list["region"].replace("nbg1", "nyc1")
        obj_attr_list["vmc_name"] = obj_attr_list["region"]

        DoCmds.pre_vmcreate_process(self, obj_attr_list, credentials_list, keys)

        if ex_create_attr is not False :
            self.vmcreate_kwargs["ex_create_attr"]["server"] = ex_create_attr

        if "management_networking" in obj_attr_list and obj_attr_list["management_networking"].lower() == "true" :
            cbdebug("Will activate the management network.", True)
            self.vmcreate_kwargs["ex_create_attr"]["management_networking"] = True

    @trace
    def get_libcloud_driver(self, libcloud_driver, tenant, access_token) :
        driver = DoCmds.get_libcloud_driver(self, libcloud_driver, tenant, access_token)
        driver.EX_CREATE_ATTRIBUTES.append("server")
        driver.EX_CREATE_ATTRIBUTES.append("management_networking")
        return driver

    @trace
    def get_description(self) :
        return "DigitalOcean Internal Production Cloud"
