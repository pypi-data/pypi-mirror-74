#!/usr/bin/env python
# -*- coding: utf-8 -*-

from dask import dataframe as dd
import pandas as pd
from covsirphy.cleaning.term import Term


class CleaningBase(Term):
    """
    Basic class for data cleaning.

    Args:
        filename (str): CSV filename of the dataset
    """

    def __init__(self, filename):
        if filename is None:
            self._raw = pd.DataFrame()
            self._cleaned_df = pd.DataFrame()
        else:
            self._raw = dd.read_csv(
                filename, dtype={"Province/State": "object"}
            ).compute()
            self._cleaned_df = self.cleaning()
        self._citation = str()

    @property
    def raw(self):
        """
        Return the raw data.

        Returns:
            (pandas.DataFrame): raw data
        """
        return self._raw

    def cleaned(self):
        """
        Return the cleaned dataset.

        Notes:
            Cleaning method is defined by self.cleaning() method.

        Returns:
            (pandas.DataFrame): cleaned data
        """
        return self._cleaned_df

    def cleaning(self):
        """
        Perform data cleaning of the raw data.

        Notes:
            Cleaning method is defined by self.cleaning() method.

        Returns:
            (pandas.DataFrame): cleaned data
        """
        df = self._raw.copy()
        return df

    def total(self):
        """
        Return a dataframe to show chronological change of number and rates.

        Returns:
            (pandas.DataFrame): group-by Date, sum of the values

                Index:
                    (Date) (pd.TimeStamp): Observation date
                Columns:
                    - Confirmed (int): the number of confirmed cases
                    - Infected (int): the number of currently infected cases
                    - Fatal (int): the number of fatal cases
                    - Recovered (int): the number of recovered cases
                    - Fatal per Confirmed (int)
                    - Recovered per Confirmed (int)
                    - Fatal per (Fatal or Recovered) (int)
        """
        df = self._cleaned_df.groupby("Date").sum()
        cols = ["Infected", "Fatal", "Recovered"]
        r_cols = self.RATE_COLUMNS[:]
        total_series = df[cols].sum(axis=1)
        df[r_cols[0]] = df["Fatal"] / total_series
        df[r_cols[1]] = df["Recovered"] / total_series
        df[r_cols[2]] = df["Fatal"] / (df["Fatal"] + df["Recovered"])
        return df

    @property
    def citation(self):
        """
        str: citation/description of the dataset
        """
        return self._citation

    @citation.setter
    def citation(self, description):
        if not isinstance(description, str):
            raise TypeError("@description must be a string.")
        self._citation = description
