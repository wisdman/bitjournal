SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Video ribbon datatable
CREATE TABLE video (
  "id"            varchar(11)  NOT NULL,
  "enable"        boolean      NOT NULL DEFAULT TRUE,

  CONSTRAINT video__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT video__check__id CHECK ("id" ~ '^[a-zA-Z0-9_-]+$')
) WITH (OIDS = FALSE);

-- Scann indexes
CREATE INDEX video__idx__enable ON video USING btree ("enable");

-- Prevent change videos id
CREATE TRIGGER video__prevent_change_id__trigger
  BEFORE UPDATE ON video FOR EACH ROW
  EXECUTE PROCEDURE prevent_change_id();
