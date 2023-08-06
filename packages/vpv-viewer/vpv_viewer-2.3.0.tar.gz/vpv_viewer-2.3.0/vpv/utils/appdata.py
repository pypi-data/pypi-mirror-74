# Copyright 2016 Medical Research Council Harwell.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
#
# @author Neil Horner <n.horner@har.mrc.ac.uk>

import appdirs
import yaml
from os.path import expanduser
import os
import collections
from vpv import common
import logging

VPV_APPDATA_VERSION = 2.2
ANNOTATION_CRICLE_RADIUS_DEFAULT = 40


class AppData(object):
    def __init__(self):
        self.using_appdata = True # Set to false if we weren't able to find a sirectory to save the appdata
        appname = 'vpv_viewer'
        appdata_dir = appdirs.user_data_dir(appname)

        if not os.path.isdir(appdata_dir):
            try:
                os.mkdir(appdata_dir)
            except WindowsError:
                #Can't find the AppData directory. So just make one in home directory
                appdata_dir = os.path.join(expanduser("~"), '.' + appname)
                if not os.path.isdir(appdata_dir):
                    os.mkdir(appdata_dir)

        self.app_data_file = os.path.join(appdata_dir, 'vpv_viewer.yaml')

        if os.path.isfile(self.app_data_file):

            self.monster_munch = common.load_yaml(self.app_data_file)
            if not self.monster_munch:
                logging.error(f'Warning: could not load app data file\nTry deleting {self.app_data_file}')
                self.monster_munch = {}
        else:
            self.monster_munch = {}

        # Appdata versioning was not always in place. If a we find some appdata without a version, reset the data
        # Also reset the data if we find a previous version

        # This breaks for JIm on v2.02. Complains about NoneType not having a get(). Catch attribute error
        try:
            if self.monster_munch.get('version') is None or self.monster_munch['version'] < VPV_APPDATA_VERSION:
                print("resetting appdata")
                self.monster_munch = {}
        except AttributeError:
            self.monster_munch = {}

        if self.monster_munch == {}:
            self.monster_munch['version'] = VPV_APPDATA_VERSION

        if 'recent_files' not in self.monster_munch:
            self.monster_munch['recent_files'] = collections.deque(maxlen=10)

    def set_flips(self, flip_options: dict):
        self.monster_munch['flips'] = flip_options

    def get_flips(self):
        flips = self.monster_munch.get('flips')

        if not flips:
            self.monster_munch['flips'] = {'axial':    {'x': False, 'z': False, 'y': False},
                                      'coronal':  {'x': False, 'z': False, 'y': False},
                                      'sagittal': {'x': False, 'z': False, 'y': False},
                                      'impc_view': False}

        return self.monster_munch['flips']

    @property
    def annotation_circle_radius(self):
        return self.monster_munch.get('annotation_cricle_radius', ANNOTATION_CRICLE_RADIUS_DEFAULT)

    @annotation_circle_radius.setter
    def annotation_circle_radius(self, radius):
        self.monster_munch['annotation_cricle_radius'] = radius

    @property
    def annotation_centre(self):
        return self.monster_munch.get('annotation_centre')

    @annotation_centre.setter
    def annotation_centre(self, centre):
        self.monster_munch['annotation_centre'] = centre

    @property
    def annotation_stage(self):
        return self.monster_munch.get('annotation_stage')

    @annotation_stage.setter
    def annotation_stage(self, stage):
       self.monster_munch['annotation_stage'] = stage

    @property
    def annotator_id(self):
        return self.monster_munch.get('annotator_id')

    @annotator_id.setter
    def annotator_id(self, id_):
        self.monster_munch['annotator_id'] = id_

    @property
    def last_screen_shot_dir(self):
        if not self.monster_munch.get('last_screenshot_dir'):
            self.monster_munch['last_screenshot_dir'] = expanduser("~")
        return self.monster_munch['last_screenshot_dir']

    @last_screen_shot_dir.setter
    def last_screen_shot_dir(self, dir_):
        self.monster_munch['last_screenshot_dir'] = dir_

    def write_app_data(self):
        #first convert yaml-incompatible stuff
        self.monster_munch['recent_files'] = list(self.monster_munch['recent_files'])[0: 10]
        with open(self.app_data_file, 'w') as fh:
            fh.write(yaml.dump(self.monster_munch))

    def get_last_dir_browsed(self):
        if not self.monster_munch.get('last_dir_browsed'):
            self.monster_munch['last_dir_browsed'] = expanduser("~")
        return self.monster_munch['last_dir_browsed']

    def set_last_dir_browsed(self, path):
        self.monster_munch['last_dir_browsed'] = path

    def add_used_volume(self, volpath):
        if volpath not in self.monster_munch['recent_files']:
            self.monster_munch['recent_files'].append(volpath)

    def get_recent_files(self):
        return self.monster_munch['recent_files']

    def set_include_filter_patterns(self, patterns):
        self.monster_munch['include_patterns'] = patterns

    def get_include_filter_patterns(self):
        if not self.monster_munch.get('include_patterns'):
            return []
        else:
            return self.monster_munch.get('include_patterns')

    def set_exclude_filter_patterns(self, patterns):
        self.monster_munch['exclude_patterns'] = patterns

    def get_exclude_filter_patterns(self):
        if not self.monster_munch.get('exclude_patterns'):
            return []
        else:
            return self.monster_munch.get('exclude_patterns')

    def clear_recent(self):
        self.monster_munch['recent_files'].clear()
