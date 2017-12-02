SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Users datatable
CREATE TABLE users (
  "id"          uuid         NOT NULL DEFAULT uuid_generate_v1(),

  "enable"      boolean      NOT NULL DEFAULT TRUE,

  "roles"       roles[]      NOT NULL DEFAULT '{user}'::roles[],

  "url"         varchar(256) DEFAULT NULL,

  "title"       varchar(160) NOT NULL DEFAULT '',
  "description" varchar(160) NOT NULL DEFAULT '',

  "email"       varchar(256) NOT NULL,
  "phone"       varchar(16)  DEFAULT NULL,

  "password"    char(128)    DEFAULT NULL, -- encode(digest(uuid_generate_v4()::text, 'sha512'), 'hex')
  "totp"        char(64)     DEFAULT NULL, -- encode(digest(uuid_generate_v4()::text, 'sha256'), 'hex')

  "oauth"       jsonb        NOT NULL DEFAULT '{}'::jsonb,

  "image"       oid          DEFAULT NULL,

  "card"        jsonb        NOT NULL DEFAULT '{}'::jsonb,

  "statuses"    uuid[]       NOT NULL DEFAULT '{}'::uuid[],

  CONSTRAINT users__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT urls__check__url CHECK ("url" ~ '^[a-z0-9]([a-z0-9_-]*[a-z0-9])?$'),

  CONSTRAINT users__check__email    CHECK ("email" ~ '^[a-z0-9_\.%+-]+@[a-z0-9_\.-]+?[a-z0-9]$'),
  CONSTRAINT users__check__phone    CHECK ("phone" ~ '^\+[0-9]{11,15}$'),

  CONSTRAINT users__check__password CHECK ("password" ~ '^[0-9a-f]{128}$'),
  CONSTRAINT users__check__totp     CHECK ("totp"     ~ '^[0-9a-f]{64}$'),

  CONSTRAINT users__check__oauth    CHECK ("oauth"::text ~ '^{'),

  CONSTRAINT users__check__card     CHECK ("card"::text  ~ '^{')
) WITH (OIDS = FALSE);

-- Check unique indexes
CREATE UNIQUE INDEX users__idx__unique_url   ON users USING btree ("url");
CREATE UNIQUE INDEX users__idx__unique_email ON users USING btree ("email");
CREATE UNIQUE INDEX users__idx__unique_phone ON users USING btree ("phone");

-- Scann indexes
CREATE INDEX users__idx__enable   ON users USING btree ("enable");
CREATE INDEX users__idx__statuses ON users USING gin   ("statuses");

-- Prevent change user id
CREATE TRIGGER users__prevent_change_id__trigger
  BEFORE UPDATE ON users FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id();

