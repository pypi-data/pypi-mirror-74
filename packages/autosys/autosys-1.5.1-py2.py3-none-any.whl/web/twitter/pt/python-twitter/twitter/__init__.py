#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Copyright 2007-2018 The Python-Twitter Developers
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""A library that provides a Python interface to the Twitter API."""
# 'future imports'
from __future__ import absolute_import

# 'Standard Library'
import json  # noqa

# 'local imports'
from ._file_cache import _FileCache  # noqa
from .api import Api  # noqa
from .error import TwitterError  # noqa
from .models import DirectMessage  # noqa
from .models import Hashtag  # noqa
from .models import List  # noqa
from .models import Media  # noqa
from .models import Status  # noqa
from .models import Trend  # noqa
from .models import Url  # noqa
from .models import User  # noqa
from .models import UserStatus  # noqa
from .parse_tweet import ParseTweet  # noqa

from .models import Category  # noqa; noqa

__author__ = "The Python-Twitter Developers"
__email__ = "python-twitter@googlegroups.com"
__copyright__ = "Copyright (c) 2007-2016 The Python-Twitter Developers"
__license__ = "Apache License 2.0"
__version__ = "3.5"
__url__ = "https://github.com/bear/python-twitter"
__download_url__ = "https://pypi.python.org/pypi/python-twitter"
__description__ = "A Python wrapper around the Twitter API"



try:
    from hashlib import md5  # noqa
except ImportError:
    from md5 import md5  # noqa
