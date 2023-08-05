"""DataFrame mutable object and column type"""

from sqlalchemy import PickleType
from sqlalchemy_mutable import MutableList, MutableDict

import csv
from copy import copy
from io import StringIO


class Variable(MutableList):
    """
    Store the data for a single variable of the dataframe.

    Attributes
    ----------
    fill_rows : bool
        Indicates that the variable should be padded with the last entry in 
        this variable. If `False`, the variable will be padded with `None`. 
        This is `True` if the `rows` parameter in the `add` method is negative 
        and `False` otherwise.
    """
    def __init__(self, fill_rows=False):
        # set _python_type to None to avoid validation for setattr
        self._python_type = None
        self.fill_rows = fill_rows
        super().__init__()
        
    def add(self, entry, rows=1):
        """
        Add an entry (or list of entries) to the variable.
        
        Parameters
        ----------
        entry : literal or list
            Entry or entries to add to the variable.

        rows : int, default=1
            Number of rows in which this entry should appear. If rows is negative, this indicates that the variable should be padded with the last entry in this variable.

        Returns
        -------
        self
        """
        self += entry if isinstance(entry, list) else [entry]*abs(rows)
        self.fill_rows = rows < 0
        return self
    
    def pad(self, end_row):
        """Pad the entries
        
        Add padding so that the Variable length is equal to `end_row`.
        """
        val = self[-1] if self and self.fill_rows else None
        self += [val]*(end_row-len(self))
        return self


class DataFrame(MutableDict):
    """
    Dataframe for storing participant data.

    Attributes
    ----------
    filename : str
        Name of the download file associated with this dataframe.
    """

    @classmethod
    def coerce(cls, key, value):
        if isinstance(value, cls):
            return value
        if isinstance(value, dict):
            return cls(value)
        return super().coerce(key, value)

    def __init__(self, value={}):
        # set _python_type to None to avoid validation in setattr
        self._python_type = None
        self.filename = None
        # initialize to empty dictionary
        super().__init__(value)

    def max_row(self, variables=None):
        """
        Maximum number of rows of any of the given variables.

        Parameters
        ----------
        variables : list of str or None, default=None
            List of variable names (keys of self). If `None`, this method 
            returns the maximum row of any of the variables in the dataframe.

        Returns
        -------
        rows : int
            Maximum number of rows of any of the given variables.
        """
        variables = variables or self.keys()
        lengths = [len(self[var]) for var in variables if var in self]
        return max(lengths) if lengths else 0
        
    def append(self, data):
        """
        Append a dataframe to the current dataframe.

        Parameters
        ----------
        data : dict
            Data to append to the current dataframe

        Returns
        -------
        self
        """
        self.pad()
        self.add(data)
        self.pad()
        return self

    def add(self, data, rows=1):
        """
        Parameters
        ----------
        data : dict
            Data to add to the current dataframe; maps variable names to an 
            entry or list of entries.

        rows : int, default=1
            Number of rows the data should occupy if the entries are not 
            lists. If the entries are lists, rows will not matter.

        Returns
        -------
        self
        """
        self._changed()
        start_row = self.max_row(data.keys())
        for var, entry in data.items():
            self.prep_variable(var, start_row)
            self[var].add(entry, rows)
        return self
        
    def prep_variable(self, var, end_row=None):
        """
        Prepare a variable before adding an entry.

        Parameters
        ----------
        var : str
            Name of the variable (in `self.keys()`) to prepare.

        end_row : int or None, default=None
            The expected end row of the variable. If the variable does not yet contain enough rows, it will be padded. If `None`, the end row is assumed to be the max row of the current dataframe.

        Returns
        -------
        self
        """
        end_row = self.max_row() if end_row is None else end_row
        if var not in self:
            self[var] = Variable()
        self[var].pad(end_row)
        return self
    
    def remove(self, start, end):
        """Remove data between start and end indices"""
        self._changed()
        for var in self.keys():
            modified_data = self[var][:start] + self[var][end:]
            self[var] = Variable(self[var].fill_rows)
            self[var].add(modified_data)
    
    def pad(self):
        """Pad DataFrame so all Variables have the same number of rows"""
        self._changed()
        end_row = self.max_row()
        [self[var].pad(end_row) for var in self.keys()]

    def get_download_file(self):
        """Get file download tuple
        
        File download is (filename, file string) tuple.
        """
        csv_str = StringIO()
        writer = csv.writer(csv_str)
        writer.writerow(self.keys())
        writer.writerows(zip(*self.values()))
        return self.filename, csv_str


class DataFrameType(PickleType):
    pass


DataFrame.associate_with(DataFrameType)