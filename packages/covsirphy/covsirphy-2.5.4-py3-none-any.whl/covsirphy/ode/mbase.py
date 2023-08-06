#!/usr/bin/env python
# -*- coding: utf-8 -*-

import numpy as np
from covsirphy.ode.mbasecom import ModelBaseCommon


class ModelBase(ModelBaseCommon):
    """
    Base class of ODE models.
    """
    # Model name
    NAME = "ModelBase"
    # names of parameters
    PARAMETERS = list()
    DAY_PARAMETERS = list()
    # Variable names in (non-dim, dimensional) ODEs
    VAR_DICT = dict()
    VARIABLES = list(VAR_DICT.values())
    # Priorities of the variables when optimization
    PRIORITIES = np.array(list())
    # Variables that increases monotonically
    VARS_INCLEASE = list()
    # Example set of parameters and initial values
    EXAMPLE = {
        "step_n": 180,
        "population": 1_000_000,
        "param_dict": dict(),
        "y0_dict": dict(),
    }

    def __init__(self, population):
        """
        This method should be overwritten in subclass.

        Args:
            population (int): total population
        """
        # Total population
        self.population = self.validate_natural_int(
            population, name="population"
        )
        # Non-dim parameters

    def __call__(self, t, X):
        """
        Return the list of dS/dt (tau-free) etc.
        This method should be overwritten in subclass.

        Returns:
            (np.array)
        """
        return np.array(list())

    @classmethod
    def param_range(cls, taufree_df, population):
        """
        Define the range of parameters (not including tau value).
        This method should be overwritten in subclass.

        Args:
            taufree_df (pandas.DataFrame):
                Index:
                    reset index
                Columns:
                    - t (int): time steps (tau-free)
                    - columns with dimensional variables
            population (int): total population

        Returns:
            (dict)
                - key (str): parameter name
                - value (tuple(float, float)): min value and max value
        """
        _dict = dict()
        return _dict

    @classmethod
    def specialize(cls, data_df, population):
        """
        Specialize the dataset for this model.
        This method should be overwritten in subclass.

        Args:
            data_df (pandas.DataFrame):
                Index:
                    reset index
                Columns:
                    - Confirmed (int): the number of confirmed cases
                    - Infected (int): the number of currently infected cases
                    - Fatal (int): the number of fatal cases
                    - Recovered (int): the number of recovered cases
                    - any columns
            population (int): total population in the place

        Returns:
            (pandas.DataFrame):
                Index:
                    reset index
                Columns:
                    - any columns @data_df has
                    - columns with dimensional variables
        """
        df = cls.validate_dataframe(
            data_df, name="data_df", columns=cls.VALUE_COLUMNS
        )
        return df

    @classmethod
    def restore(cls, specialized_df):
        """
        Restore Confirmed/Infected/Recovered/Fatal using a dataframe with the variables of the model.
        This method should be overwritten in subclass.

        Args:
            specialized_df (pandas.DataFrame): dataframe with the variables

                Index:
                    (object):
                Columns:
                    - variables of the models (int)
                    - any columns

        Returns:
            (pandas.DataFrame):
                Index:
                    (object): as-is
                Columns:
                    - Confirmed (int): the number of confirmed cases
                    - Infected (int): the number of currently infected cases
                    - Fatal (int): the number of fatal cases
                    - Recovered (int): the number of recovered cases
                    - the other columns @specialzed_df has
        """
        df = specialized_df.copy()
        other_cols = list(set(df.columns) - set(cls.VALUE_COLUMNS))
        df[cls.C] = None
        df[cls.CI] = None
        df[cls.F] = None
        df[cls.R] = None
        return df.loc[:, [*cls.VALUE_COLUMNS, *other_cols]]

    def calc_r0(self):
        """
        Calculate (basic) reproduction number.
        This method should be overwritten in subclass.
        """
        return None

    def calc_days_dict(self, tau):
        """
        Calculate 1/beta [day] etc.
        This method should be overwritten in subclass.

        Args:
            param tau (int): tau value [min]
        """
        return dict()

    @classmethod
    def tau_free(cls, subset_df, population, tau=None):
        """
        Create a dataframe specialized to the model.
        If tau is not None, Date column will be converted to '(Date - start date) / tau'
        and saved in t column.

        Args:
            subset_df (pandas.DataFrame):
                Index:
                    reset index
                Columns:
                    - Date (pd.TimeStamp): Observation date
                    - Confirmed (int): the number of confirmed cases
                    - Infected (int): the number of currently infected cases
                    - Fatal (int): the number of fatal cases
                    - Recovered (int): the number of recovered cases
                    - any columns
            population (int): population value
            tau (int or None): tau value [min], 0 <= tau <= 1440

        Returns:
            (pandas.DataFrame):
                Index:
                    reset index
                Columns:
                    - t (int): if tau is not None
                    - columns with dimensional variables
        """
        df = subset_df.copy()
        if tau is not None:
            tau = cls.validate_natural_int(tau, name="tau")
            if tau > 1440:
                raise ValueError(
                    f"@tau must be 1440 or lower, but {tau} was applied.")
            df = cls.validate_dataframe(
                df, name="data_df", columns=cls.NLOC_COLUMNS)
            # Calculate elapsed time from the first date [min]
            df[cls.T] = (df[cls.DATE] - df[cls.DATE].min()).dt.total_seconds()
            df[cls.T] = df[cls.T] // 60
            # Convert to tau-free
            df[cls.TS] = (df[cls.T] / tau).astype(np.int64)
            df = df.drop(cls.T, axis=1)
        df = df.drop(cls.DATE, axis=1)
        return cls.specialize(df, population)
