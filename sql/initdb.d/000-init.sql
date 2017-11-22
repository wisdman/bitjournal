SET statement_timeout = 0;
SET lock_timeout = 0;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS "pgcrypto"  WITH SCHEMA pg_catalog;

CREATE SCHEMA "private";
