
export class DBError extends Error {
  static CASE_NOT_FOUND = '20000'
  static CARDINALITY_VIOLATION = '21000'
  static DATA_EXCEPTION = '22000'
  static ARRAY_SUBSCRIPT_ERROR = '2202E'
  static CHARACTER_NOT_IN_REPERTOIRE = '22021'
  static DATETIME_FIELD_OVERFLOW = '22008'
  static DIVISION_BY_ZERO = '22012'
  static ERROR_IN_ASSIGNMENT = '22005'
  static ESCAPE_CHARACTER_CONFLICT = '2200B'
  static INDICATOR_OVERFLOW = '22022'
  static INTERVAL_FIELD_OVERFLOW = '22015'
  static INVALID_ARGUMENT_FOR_LOGARITHM = '2201E'
  static INVALID_ARGUMENT_FOR_NTILE_FUNCTION = '22014'
  static INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION = '22016'
  static INVALID_ARGUMENT_FOR_POWER_FUNCTION = '2201F'
  static INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION = '2201G'
  static INVALID_CHARACTER_VALUE_FOR_CAST = '22018'
  static INVALID_DATETIME_FORMAT = '22007'
  static INVALID_ESCAPE_CHARACTER = '22019'
  static INVALID_ESCAPE_OCTET = '2200D'
  static INVALID_ESCAPE_SEQUENCE = '22025'
  static NONSTANDARD_USE_OF_ESCAPE_CHARACTER = '22P06'
  static INVALID_INDICATOR_PARAMETER_VALUE = '22010'
  static INVALID_PARAMETER_VALUE = '22023'
  static INVALID_REGULAR_EXPRESSION = '2201B'
  static INVALID_ROW_COUNT_IN_LIMIT_CLAUSE = '2201W'
  static INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE = '2201X'
  static INVALID_TABLESAMPLE_ARGUMENT = '2202H'
  static INVALID_TABLESAMPLE_REPEAT = '2202G'
  static INVALID_TIME_ZONE_DISPLACEMENT_VALUE = '22009'
  static INVALID_USE_OF_ESCAPE_CHARACTER = '2200C'
  static MOST_SPECIFIC_TYPE_MISMATCH = '2200G'
  static NULL_VALUE_NOT_ALLOWED = '22004'
  static NULL_VALUE_NO_INDICATOR_PARAMETER = '22002'
  static NUMERIC_VALUE_OUT_OF_RANGE = '22003'
  static SEQUENCE_GENERATOR_LIMIT_EXCEEDED = '2200H'
  static STRING_DATA_LENGTH_MISMATCH = '22026'
  static STRING_DATA_RIGHT_TRUNCATION = '22001'
  static SUBSTRING_ERROR = '22011'
  static TRIM_ERROR = '22027'
  static UNTERMINATED_C_STRING = '22024'
  static ZERO_LENGTH_CHARACTER_STRING = '2200F'
  static FLOATING_POINT_EXCEPTION = '22P01'
  static INVALID_TEXT_REPRESENTATION = '22P02'
  static INVALID_BINARY_REPRESENTATION = '22P03'
  static BAD_COPY_FILE_FORMAT = '22P04'
  static UNTRANSLATABLE_CHARACTER = '22P05'
  static NOT_AN_XML_DOCUMENT = '2200L'
  static INVALID_XML_DOCUMENT = '2200M'
  static INVALID_XML_CONTENT = '2200N'
  static INVALID_XML_COMMENT = '2200S'
  static INVALID_XML_PROCESSING_INSTRUCTION = '2200T'
  static INTEGRITY_CONSTRAINT_VIOLATION = '23000'
  static RESTRICT_VIOLATION = '23001'
  static NOT_NULL_VIOLATION = '23502'
  static FOREIGN_KEY_VIOLATION = '23503'
  static UNIQUE_VIOLATION = '23505'
  static CHECK_VIOLATION = '23514'
  static EXCLUSION_VIOLATION = '23P01'
  static INVALID_CURSOR_STATE = '24000'
  static INVALID_TRANSACTION_STATE = '25000'
  static ACTIVE_SQL_TRANSACTION = '25001'
  static BRANCH_TRANSACTION_ALREADY_ACTIVE = '25002'
  static HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL = '25008'
  static INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION = '25003'
  static INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION = '25004'
  static NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION = '25005'
  static READ_ONLY_SQL_TRANSACTION = '25006'
  static SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED = '25007'
  static NO_ACTIVE_SQL_TRANSACTION = '25P01'
  static IN_FAILED_SQL_TRANSACTION = '25P02'
  static IDLE_IN_TRANSACTION_SESSION_TIMEOUT = '25P03'
  static INVALID_SQL_STATEMENT_NAME = '26000'
  static TRIGGERED_DATA_CHANGE_VIOLATION = '27000'
  static DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST = '2B000'
  static DEPENDENT_OBJECTS_STILL_EXIST = '2BP01'
  static INVALID_TRANSACTION_TERMINATION = '2D000'
  static SQL_ROUTINE_EXCEPTION = '2F000'
  static FUNCTION_EXECUTED_NO_RETURN_STATEMENT = '2F005'
  static MODIFYING_SQL_DATA_NOT_PERMITTED = '2F002'
  static PROHIBITED_SQL_STATEMENT_ATTEMPTED = '2F003'
  static READING_SQL_DATA_NOT_PERMITTED = '2F004'
  static TRANSACTION_ROLLBACK = '40000'
  static TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION = '40002'
  static SERIALIZATION_FAILURE = '40001'
  static STATEMENT_COMPLETION_UNKNOWN = '40003'
  static DEADLOCK_DETECTED = '40P01'
  static SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION = '42000'
  static SYNTAX_ERROR = '42601'
  static INSUFFICIENT_PRIVILEGE = '42501'
  static CANNOT_COERCE = '42846'
  static GROUPING_ERROR = '42803'
  static WINDOWING_ERROR = '42P20'
  static INVALID_RECURSION = '42P19'
  static INVALID_FOREIGN_KEY = '42830'
  static INVALID_NAME = '42602'
  static NAME_TOO_LONG = '42622'
  static RESERVED_NAME = '42939'
  static DATATYPE_MISMATCH = '42804'
  static INDETERMINATE_DATATYPE = '42P18'
  static COLLATION_MISMATCH = '42P21'
  static INDETERMINATE_COLLATION = '42P22'
  static WRONG_OBJECT_TYPE = '42809'
  static GENERATED_ALWAYS = '428C9'
  static UNDEFINED_COLUMN = '42703'
  static UNDEFINED_FUNCTION = '42883'
  static UNDEFINED_TABLE = '42P01'
  static UNDEFINED_PARAMETER = '42P02'
  static UNDEFINED_OBJECT = '42704'
  static DUPLICATE_COLUMN = '42701'
  static DUPLICATE_CURSOR = '42P03'
  static DUPLICATE_DATABASE = '42P04'
  static DUPLICATE_FUNCTION = '42723'
  static DUPLICATE_PREPARED_STATEMENT = '42P05'
  static DUPLICATE_SCHEMA = '42P06'
  static DUPLICATE_TABLE = '42P07'
  static DUPLICATE_ALIAS = '42712'
  static DUPLICATE_OBJECT = '42710'
  static AMBIGUOUS_COLUMN = '42702'
  static AMBIGUOUS_FUNCTION = '42725'
  static AMBIGUOUS_PARAMETER = '42P08'
  static AMBIGUOUS_ALIAS = '42P09'
  static INVALID_COLUMN_REFERENCE = '42P10'
  static INVALID_COLUMN_DEFINITION = '42611'
  static INVALID_CURSOR_DEFINITION = '42P11'
  static INVALID_DATABASE_DEFINITION = '42P12'
  static INVALID_FUNCTION_DEFINITION = '42P13'
  static INVALID_PREPARED_STATEMENT_DEFINITION = '42P14'
  static INVALID_SCHEMA_DEFINITION = '42P15'
  static INVALID_TABLE_DEFINITION = '42P16'
  static INVALID_OBJECT_DEFINITION = '42P17'
  static WITH_CHECK_OPTION_VIOLATION = '44000'

  readonly code: string
  readonly origin: Error | undefined

  constructor(value?: any) {

    if (!value){
      super('unknown database error')
      this.code = 'XXXXX'
      this.origin = undefined
      return this
    }

    super(value.message && String(value.message) || String(value))
    this.code = value.code && String(value.code).toUpperCase() || 'XXXXX'
    this.origin = value.origin instanceof Error ? value.origin : value instanceof Error ? value : undefined
  }

  is(code: string): boolean {
    return this.code === code.toUpperCase()
  }
}