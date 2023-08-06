"""
    Module for data preprocessing
    Date: 25/May/2020
    Author: Li Tang
"""
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

__author__ = ['Li Tang']
__copyright__ = 'Li Tang'
__credits__ = ['Li Tang']
__license__ = 'MIT'
__version__ = '0.1.9'
__maintainer__ = ['Li Tang']
__email__ = 'litang1025@gmail.com'
__status__ = 'Production'


class SuiDsPreprocessingError(Exception):
    pass


def month_to_int(month: str, unknown=None) -> int:
    month_dict = {'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6, 'July': 7, 'August': 8,
                  'September': 9, 'October': 10, 'November': 11, 'December': 12}

    month_abbr_dict = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9,
                       'Oct': 10, 'Nov': 11, 'Dec': 12}

    if month in month_dict:
        return month_dict[month]

    elif month in month_abbr_dict:
        return month_abbr_dict[month]

    else:
        if unknown is None:
            raise SuiDsPreprocessingError("This input month '{}' cannot be parsed.".format(month))
        else:
            return unknown


def weekday_to_int(weekday: str, unknown=None) -> int:
    weekday_dict = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Sunday': 7}

    weekday_abbr_dict = {'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6, 'Sun': 7}

    if weekday in weekday_dict:
        return weekday_dict[weekday]

    elif weekday in weekday_abbr_dict:
        return weekday_abbr_dict[weekday]

    else:
        if unknown is None:
            raise SuiDsPreprocessingError("This input weekday '{}' cannot be parsed.".format(weekday))
        else:
            return unknown


def top_k(data, k, axis=1, target=0, target_only=False, desc=True):
    def __push(item, data, axis, desc):
        for idx in range(len(data) - 1, -1, -1):
            if desc is True and data[idx][axis] >= item[axis] or desc is False and data[idx][axis] <= item[axis]:
                result = data[:idx + 1]
                result.append(item)
                result.extend(data[idx + 1:])
                return result
        data.insert(0, item)
        return data

    result = []

    for item in data:
        if len(result) < k or desc is True and item[axis] > result[-1][axis] or desc is False and item[axis] < \
                result[-1][axis]:
            result = __push(item, result, axis=axis, desc=desc)
        if len(result) > k:
            result = result[:k]

    return [i[target] for i in result] if target_only else result
