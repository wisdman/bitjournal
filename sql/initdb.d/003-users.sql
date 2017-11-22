SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = private;

-- User roles
CREATE TYPE roles AS ENUM (
  'user',          -- user
  'author',        -- author
  'publisher',     -- publisher
  'сhief',         -- chief editor
  'administrator', -- full futured admin
  'su'             -- super user
);

-- Users datatable
CREATE TABLE users (
  id          uuid         NOT NULL DEFAULT uuid_generate_v1(),
  enable      boolean      NOT NULL DEFAULT TRUE,
  roles       roles[]      NOT NULL DEFAULT '{user}'::roles[],

  title       varchar(256) NOT NULL DEFAULT '',
  description varchar(256) NOT NULL DEFAULT '',

  email       varchar(256) NOT NULL,
  phone       varchar(16)  DEFAULT NULL,

  password    char(128)    DEFAULT NULL,
  totp        char(128)    DEFAULT NULL,
  oauth       jsonb        NOT NULL DEFAULT '{}'::jsonb,

  image       oid          DEFAULT NULL,
  card        jsonb        NOT NULL DEFAULT '{}'::jsonb,

  CONSTRAINT users__idx_pkey__id PRIMARY KEY (id),

  CONSTRAINT users__check__email    CHECK (email ~ '^[a-z0-9_\.%+-]+@[a-z0-9_\.-]+?[a-z0-9]$'),
  CONSTRAINT users__check__phone    CHECK (phone ~ '^\+[0-9]{11,15}$'),

  CONSTRAINT users__check__password CHECK (password ~ '^[0-9a-f]{128}$'),
  CONSTRAINT users__check__totp     CHECK (totp     ~ '^[0-9a-f]{128}$')
) WITH (OIDS = FALSE);

-- Check unique indexes
CREATE UNIQUE INDEX users__idx__unique_email ON users USING btree (email);
CREATE UNIQUE INDEX users__idx__unique_phone ON users USING btree (phone);

-- Scann indexes
CREATE INDEX users__idx__enable ON users USING btree (enable);

-- Prevent change user id
CREATE TRIGGER users__trigger__prevent_change_id_trigger
  BEFORE UPDATE ON users FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id_trigger();
