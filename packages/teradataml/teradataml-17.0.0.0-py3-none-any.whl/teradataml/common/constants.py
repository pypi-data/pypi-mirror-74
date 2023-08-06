# -*- coding: utf-8 -*-
"""
Unpublished work.
Copyright (c) 2018 by Teradata Corporation. All rights reserved.
TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET

Primary Owner: ellen.nolan@teradata.com
Secondary Owner:

teradataml.common.constants
----------
A class for holding all constants
"""
import re
import sqlalchemy
from enum import Enum
from teradatasqlalchemy.types import (INTEGER, SMALLINT, BIGINT, BYTEINT, DECIMAL, FLOAT, NUMBER)
from teradatasqlalchemy.types import (DATE, TIME, TIMESTAMP)
from teradatasqlalchemy.types import (BYTE, VARBYTE, BLOB)
from teradataml.options.configure import configure


class SQLConstants(Enum):
    SQL_BASE_QUERY = 1
    SQL_SAMPLE_QUERY = 2
    SQL_SAMPLE_WITH_WHERE_QUERY = 3
    SQL_CREATE_VOLATILE_TABLE_FROM_QUERY_WITH_DATA = 4
    SQL_CREATE_VOLATILE_TABLE_FROM_QUERY_WITHOUT_DATA = 5
    SQL_CREATE_VOLATILE_TABLE_USING_COLUMNS = 6
    SQL_CREATE_TABLE_FROM_QUERY_WITH_DATA = 7
    SQL_HELP_COLUMNS = 8
    SQL_DROP_TABLE = 9
    SQL_DROP_VIEW = 10
    SQL_NROWS_FROM_QUERY = 11
    SQL_TOP_NROWS_FROM_TABLEORVIEW = 12
    SQL_INSERT_INTO_TABLE_VALUES = 13
    SQL_SELECT_COLUMNNAMES_FROM = 14
    SQL_SELECT_DATABASE = 15
    SQL_HELP_VOLATILE_TABLE = 16
    SQL_SELECT_TABLE_NAME = 17
    SQL_CREATE_VIEW = 18
    SQL_SELECT_USER = 19
    SQL_HELP_VIEW = 20
    SQL_HELP_TABLE = 21
    SQL_HELP_INDEX = 22
    SQL_INSERT_ALL_FROM_TABLE = 23
    SQL_SELECT_DATABASENAME = 24
    SQL_AND_TABLE_KIND = 25
    SQL_AND_TABLE_NAME = 26
    SQL_AND_TABLE_NAME_LIKE = 27
    SQL_CREATE_TABLE_USING_COLUMNS = 28
    SQL_DELETE_ALL_ROWS = 29
    SQL_DELETE_SPECIFIC_ROW = 30
    SQL_EXEC_STORED_PROCEDURE = 31


class TeradataConstants(Enum):
    TERADATA_VIEW = 1
    TERADATA_TABLE = 2
    TABLE_COLUMN_LIMIT = 2048
    TERADATA_JOINS = ["inner", "left", "right", "full", "cross"]
    TERADATA_JOIN_OPERATORS = ['>=', '<=', '<>', '!=', '>', '<', '=']
    # Order of operators
    # shouldn't be changed. This is the order in which join condition is tested - first, operators
    # with two characters and then the operators with single character.
    SUPPORTED_ENGINES = {"ENGINE_ML" : {"name" : "mle", "file" : "mlengine_alias_definitions"},
                         "ENGINE_SQL" : {"name" : "sqle", "file" : "sqlengine_alias_definitions"}}
    SUPPORTED_VANTAGE_VERSIONS = { "vantage1.0": "v1.0", "vantage1.1": "v1.1"}


class AEDConstants(Enum):
    AED_NODE_NOT_EXECUTED = 0
    AED_NODE_EXECUTED     = 1
    AED_DB_OBJECT_NAME_BUFFER_SIZE = 128
    AED_NODE_TYPE_BUFFER_SIZE = 32
    AED_ASSIGN_DROP_EXISITING_COLUMNS = "Y"
    AED_ASSIGN_DO_NOT_DROP_EXISITING_COLUMNS = "N"
    AED_QUERY_NODE_TYPE_ML_QUERY_SINGLE_OUTPUT = "ml_query_single_output"
    AED_QUERY_NODE_TYPE_ML_QUERY_MULTI_OUTPUT = "ml_query_multi_output"
    AED_QUERY_NODE_TYPE_REFERENCE = "reference"


class SourceType(Enum):
    TABLE = "TABLE"
    QUERY = "QUERY"


class PythonTypes(Enum):
    PY_NULL_TYPE = "nulltype"
    PY_INT_TYPE = "int"
    PY_FLOAT_TYPE = "float"
    PY_STRING_TYPE = "str"
    PY_DECIMAL_TYPE = "decimal.Decimal"
    PY_DATETIME_TYPE = "datetime.datetime"
    PY_TIME_TYPE = "datetime.time"
    PY_DATE_TYPE = "datetime.date"
    PY_BYTES_TYPE = "bytes"


class TeradataTypes(Enum):
    TD_INTEGER_TYPES = [INTEGER, BYTEINT, SMALLINT, BIGINT, sqlalchemy.sql.sqltypes.Integer]
    TD_INTEGER_CODES = ["I", "I1", "I2", "I8"]
    TD_FLOAT_TYPES = [FLOAT, sqlalchemy.sql.sqltypes.Numeric]
    TD_FLOAT_CODES = ["F"]
    TD_DECIMAL_TYPES = [DECIMAL, NUMBER]
    TD_DECIMAL_CODES = ["D", "N"]
    TD_BYTE_TYPES = [BYTE, VARBYTE, BLOB]
    TD_BYTE_CODES = ["BF", "BV", "BO"]
    TD_DATETIME_TYPES = [TIMESTAMP, sqlalchemy.sql.sqltypes.DateTime]
    TD_DATETIME_CODES = ["TS", "SZ"]
    TD_TIME_TYPES = [TIME, sqlalchemy.sql.sqltypes.Time]
    TD_TIME_CODES = ["AT", "TZ"]
    TD_DATE_TYPES = [DATE, sqlalchemy.sql.sqltypes.Date]
    TD_DATE_CODES = ["DA"]
    TD_NULL_TYPE = "NULLTYPE"


class TeradataTableKindConstants(Enum):
    VOLATILE = "volatile"
    TABLE = "table"
    VIEW = "view"
    TEMP = "temp"
    ALL  = "all"
    ML_PATTERN = "ml_%"
    VOLATILE_TABLE_NAME = 'Table Name'
    REGULAR_TABLE_NAME = 'TableName'


class SQLPattern(Enum):
    SQLMR = re.compile(r"SELECT \* FROM .*\((\s*.*)*\) as .*", re.IGNORECASE)
    DRIVER_FUNC_SQLMR = re.compile(r".*OUT\s+TABLE.*", re.IGNORECASE)
    SQLMR_REFERENCE_NODE = re.compile("reference:.*:.*", re.IGNORECASE)


class FunctionArgumentMapperConstants(Enum):
    # Mapper related
    SQL_TO_TDML = "sql_to_tdml"
    TDML_TO_SQL = "tdml_to_sql"
    ALTERNATE_TO = "alternate_to"
    TDML_NAME = "tdml_name"
    TDML_TYPE = "tdml_type"
    USED_IN_SEQUENCE_INPUT_BY = "used_in_sequence_by"
    USED_IN_FORMULA = "used_in_formula"
    INPUTS = "inputs"
    OUTPUTS = "outputs"
    ARGUMENTS = "arguments"
    DEPENDENT_ATTR = "dependent"
    INDEPENDENT_ATTR = "independent"
    TDML_FORMULA_NAME = "formula"
    DEFAULT_OUTPUT = "__default_output__"
    DEFAULT_OUTPUT_TDML_NAME_SINGLE = "result"
    DEFAULT_OUTPUT_TDML_NAME_MULTIPLE = "output"

    # JSON related
    ALLOWS_LISTS = "allowsLists"
    DATATYPE = "datatype"
    BOOL_TYPE = "BOOLEAN"
    INT_TYPE = ["INTEGER", "LONG"]
    FLOAT_TYPE = ["DOUBLE", "DOUBLE PRECISION", "FLOAT"]
    INPUT_TABLES = "input_tables"
    OUTPUT_TABLES = "output_tables"
    ARGUMENT_CLAUSES = "argument_clauses"
    R_NAME = "rName"
    NAME = "name"
    FUNCTION_TDML_NAME = "function_tdml_name"
    R_FOMULA_USAGE = "rFormulaUsage"
    R_ORDER_NUM = "rOrderNum"
    TDML_SEQUENCE_COLUMN_NAME = "sequence_column"


class ModelCatalogingConstants(Enum):
    MODEL_CATALOG_DB = "TD_ModelCataloging"
    MODEL_ENGINE_ML = "ML Engine"
    MODEL_ENGINE_ADVSQL = "Advanced SQL Engine"

    MODEL_TDML = "teradataml"

    # Stored Procedure Names
    SAVE_MODEL = "SYSLIB.SaveModel"
    DELETE_MODEL = "SYSLIB.DeleteModel"
    PUBLISH_MODEL = "SYSLIB.PublishModel"

    # ModelCataloging Direct Views
    MODELS = "ModelsV"
    MODELS_DETAILS = "ModelDetailsV"
    MODELS_OBJECTS = "ModelObjectsV"
    MODELS_ATTRS = "ModelAttributesV"
    MODELS_PERF = "ModelPerformanceV"
    MODELS_LOC = "ModelLocationV"

    # ModelCataloging Derived Views
    MODELSX = "ModelsVX"
    MODELS_DETAILSX = "ModelDetailsVX"
    MODELS_INPUTSX = "ModelTrainingDataVX"

    # Columns names used for Filter
    MODEL_NAME = "Name"
    MODEL_ID = "ModelId"
    CREATED_BY = "CreatedBy"
    MODEL_ACCESS = "ModelAccess"
    MODEL_DERIVED_NAME = "ModelName"
    MODEL_DERIVED_ALGORITHM = "ModelAlgorithm"
    MODEL_DERIVED_PREDICTION_TYPE = "ModelPredictionType"
    MODEL_DERIVED_BUILD_TIME = "ModelBuildTime"
    MODEL_DERIVED_TARGET_COLUMN = "ModelTargetColumn"
    MODEL_DERIVED_GENENG = "ModelGeneratingEngine"
    MODEL_DERIVED_GENCLIENT = "ModelGeneratingClient"
    MODEL_ATTR_CLIENT_NAME = "ClientSpecificAttributeName"
    MODEL_ATTR_NAME = "AttributeName"
    MODEL_ATTR_VALUE = "AttributeValue"
    MODEL_ATTR_VALUEC = "AttributeValueC"
    MODEL_CLIENT_CLASS_KEY = "__class_name__"
    MODEL_INPUT_NROWS = "NRows"
    MODEL_INPUT_NCOLS = "NCols"

    MODEL_OBJ_NAME = "TableReferenceName"
    MODEL_OBJ_CLIENT_NAME = "ClientSpecificTableReferenceName"
    MODEL_OBJ_TABLE_NAME = "TableName"

    MODEL_INPUT_NAME = "InputName"
    MODEL_INPUT_CLIENT_NAME = "ClientSpecificInputName"
    MODEL_INPUT_TABLE_NAME = "TableName"

    MODEL_LIST_LIST = ['ModelName','ModelAlgorithm','ModelGeneratingEngine',
                       'ModelGeneratingClient','CreatedBy','CreatedDate']

    # Valid and default status and access
    MODEL_VALID_STATUS = ['ACTIVE', 'RETIRED', 'CANDIDATE', 'PRODUCTION', 'IN-DEVELOPMENT']
    DEFAULT_SAVE_STATUS = 'In-Development'
    DEFAULT_SAVE_ACCESS = 'Private'
    PUBLIC_ACCESS = 'Public'

    # Expected Prediction Types
    PREDICTION_TYPE_CLASSIFICATION = 'CLASSIFICATION'
    PREDICTION_TYPE_REGRESSION = 'REGRESSION'
    PREDICTION_TYPE_CLUSTERING = 'CLUSTERING'
    PREDICTION_TYPE_OTHER = 'OTHER'


class CopyToConstants(Enum):
    DBAPI_BATCHSIZE                      = 16383


class PTITableConstants(Enum):
    PATTERN_TIMEZERO_DATE = r"^DATE\s+'(.*)'$"
    TD_SEQNO = 'TD_SEQNO'
    TD_TIMECODE = 'TD_TIMECODE'
    TD_TIMEBUCKET = 'TD_TIMEBUCKET'
    TSCOLTYPE_TIMEBUCKET = 'TB'
    TSCOLTYPE_TIMECODE = 'TC'
    VALID_TIMEBUCKET_DURATIONS_FORMAL = ['CAL_YEARS', 'CAL_MONTHS', 'CAL_DAYS', 'WEEKS', 'DAYS', 'HOURS', 'MINUTES',
                                         'SECONDS', 'MILLISECONDS', 'MICROSECONDS']
    VALID_TIMEBUCKET_DURATIONS_SHORTHAND = ['cy', 'cyear', 'cyears',
                                            'cm', 'cmonth', 'cmonths',
                                            'cd', 'cday', 'cdays',
                                            'w', 'week', 'weeks',
                                            'd', 'day', 'days',
                                            'h', 'hr', 'hrs', 'hour', 'hours',
                                            'm', 'mins', 'minute', 'minutes',
                                            's', 'sec', 'secs', 'second', 'seconds',
                                            'ms', 'msec', 'msecs', 'millisecond', 'milliseconds',
                                            'us', 'usec', 'usecs', 'microsecond', 'microseconds']
    PATTERN_TIMEBUCKET_DURATION_SHORT = "^([0-9]+){}$"
    PATTERN_TIMEBUCKET_DURATION_FORMAL = r"^{}\(([0-9]+)\)$"
    VALID_TIMECODE_DATATYPES = [TIMESTAMP, DATE]
    VALID_SEQUENCE_COL_DATATYPES = [INTEGER]
    TIMEBUCKET_DURATION_FORMAT_MAPPER = {'cy': 'CAL_YEARS({})',
                                         'cyear': 'CAL_YEARS({})',
                                         'cyears': 'CAL_YEARS({})',
                                         'cm': 'CAL_MONTHS({})',
                                         'cmonth': 'CAL_MONTHS({})',
                                         'cmonths': 'CAL_MONTHS({})',
                                         'cd': 'CAL_DAYS({})',
                                         'cday': 'CAL_DAYS({})',
                                         'cdays': 'CAL_DAYS({})',
                                         'w': 'WEEKS({})',
                                         'week': 'WEEKS({})',
                                         'weeks': 'WEEKS({})',
                                         'd': 'DAYS({})',
                                         'day': 'DAYS({})',
                                         'days': 'DAYS({})',
                                         'h': 'HOURS({})',
                                         'hr': 'HOURS({})',
                                         'hrs': 'HOURS({})',
                                         'hour': 'HOURS({})',
                                         'hours': 'HOURS({})',
                                         'm': 'MINUTES({})',
                                         'mins': 'MINUTES({})',
                                         'minute': 'MINUTES({})',
                                         'minutes': 'MINUTES({})',
                                         's': 'SECONDS({})',
                                         'sec': 'SECONDS({})',
                                         'secs': 'SECONDS({})',
                                         'second': 'SECONDS({})',
                                         'seconds': 'SECONDS({})',
                                         'ms': 'MILLISECONDS({})',
                                         'msec': 'MILLISECONDS({})',
                                         'msecs': 'MILLISECONDS({})',
                                         'millisecond': 'MILLISECONDS({})',
                                         'milliseconds': 'MILLISECONDS({})',
                                         'us': 'MICROSECONDS({})',
                                         'usec': 'MICROSECONDS({})',
                                         'usecs': 'MICROSECONDS({})',
                                         'microsecond': 'MICROSECONDS({})',
                                         'microseconds': 'MICROSECONDS({})'}
