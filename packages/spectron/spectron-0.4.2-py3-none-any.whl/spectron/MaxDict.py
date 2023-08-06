# -*- coding: utf-8 -*-

import logging

from collections import defaultdict
from typing import Dict, List, Tuple

from . import data_types
from .merge import construct_branch, extract_terminal_keys


logger = logging.getLogger(__name__)

# --------------------------------------------------------------------------------------


class Field:
    """Tracks `max` value and data type(s)."""

    numeric_types = {"int", "float"}

    def __init__(self, parent_key: str, value=None, *, str_numeric_override=False):
        self.parent_key = parent_key
        self.str_numeric_override = str_numeric_override
        self.num_na = 0
        self.dtype_max = {}
        self.hist = defaultdict(int)
        self.add(value)
        self._test_ver = "4"

    def push_warnings(self):
        """Detect and log mixed dtypes."""

        if len(self.hist.keys()) > 1:
            if isinstance(self.parent_key, tuple):
                ref_par_key = ".".join(self.parent_key)
            else:
                ref_par_key = self.parent_key

            logger.warning(
                f"[{ref_par_key}] dtypes detected {', '.join(sorted(self.hist.keys()))}"
            )

    @property
    def dtype(self):
        """Get data type with highest count.

        If `str_numeric_override` is enabled and any strings have been seen, returned
        dtype is forced as str.
        """

        if not self.hist:
            return None

        dtype = None
        if self.str_numeric_override and "str" in self.hist:
            if self.numeric_types & self.hist.keys():
                dtype = "str"

        if not dtype:
            dtype, _ = max(self.hist.items(), key=lambda t: t[1])
        return dtype

    def _get_max_comparable(self, prev_value, value, key_func):
        """Get max value for inputs which can be compared."""

        max_value = None
        if prev_value is None:
            max_value = value
        else:
            max_value = max(value, prev_value, key=key_func)
        return max_value

    def _compare_numeric(self, prev_value, value):
        return self._get_max_comparable(prev_value, value, abs)

    def _compare_str(self, prev_value, value):
        return self._get_max_comparable(prev_value, value, len)

    def _compare_other_types(self, prev_value, value):
        return value

    @property
    def max_value(self):
        return self.dtype_max.get(self.dtype)

    def _update_dtype_max(self, incoming_dtype, value):
        """Detect dtype change and store diffs."""

        if incoming_dtype in self.dtype_max:
            prev_value = self.dtype_max[incoming_dtype]

            comp_func = None
            if incoming_dtype == "str":
                comp_func = self._compare_str
            elif incoming_dtype in self.numeric_types:
                comp_func = self._compare_numeric
            else:
                comp_func = self._compare_other_types

            self.dtype_max[incoming_dtype] = comp_func(prev_value, value)

        else:
            self.dtype_max[incoming_dtype] = value

    def add(self, value):
        """Add value to field and track dtype."""

        if value is not None:
            incoming_dtype = type(value).__name__
            self._update_dtype_max(incoming_dtype, value)
            self._dtype = incoming_dtype
            self.hist[self._dtype] += 1
        else:
            self.num_na += 1


# --------------------------------------------------------------------------------------


class MaxDict:
    """Collect and store field, `max` value per key branch."""

    def __init__(self, str_numeric_override=False):
        self.str_numeric_override = str_numeric_override
        self.hist = defaultdict(int)
        self.key_store = {}

    def add(self, key: str, value):
        self.hist[key] += 1
        if key in self.key_store:
            self.key_store[key].add(value)
        else:
            self.key_store[key] = Field(
                key, value, str_numeric_override=self.str_numeric_override
            )

    def load_dict(self, d: Dict):
        for key, value in extract_terminal_keys(d):
            self.add(key, value)

    def batch_load_dicts(self, items: List[Dict]):
        for d in items:
            self.load_dict(d)

    def fields(self):
        yield from self.key_store.values()

    def fields_seen(self) -> Tuple[int, int]:
        tot = 0
        tot_na = 0
        for field in self.fields():
            tot += sum(field.hist.values())
            tot_na += field.num_na
        return tot, tot_na

    def has_dtype_changes(self) -> List[Field]:
        loc = []
        for field in self.fields():
            if field.dtype_change:
                loc.append(field)
        return loc

    def asdict(self, astype: bool = False) -> Dict:
        """Returned keys, [max | type] vals as dict."""

        d, loc = {}, {}
        for group_key, field in sorted(self.key_store.items(), key=lambda t: t[0]):
            is_dict = False
            val = field.max_value

            if val is None:
                logger.warning(f"Ignoring key with None value: {'.'.join(group_key)}")
                continue

            if isinstance(val, dict):
                is_dict = True
            elif isinstance(val, list):
                if val and val[0] is not None:
                    val = val.pop(0)
                else:
                    val = []
            elif astype:
                val = data_types.set_dtype(val)

            construct_branch(d, loc, group_key, is_dict=is_dict, key_val=val)

        return d
