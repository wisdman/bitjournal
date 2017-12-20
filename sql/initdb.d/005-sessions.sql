SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- User sessions datatable
CREATE TABLE sessions (
  "id" char(128) NOT NULL DEFAULT encode(digest(uuid_generate_v1()::text || uuid_generate_v4()::text, 'sha512'), 'hex'),
  "ip" inet DEFAULT NULL,
  "expires" timestamp without time zone NOT NULL DEFAULT timezone('UTC', now() + '1 month'::interval),
  "owner" uuid NOT NULL,

  CONSTRAINT sessions__idx_pkey PRIMARY KEY ("id"),

  CONSTRAINT users__check__id CHECK ("id" ~ '^[0-9a-f]{128}$'),

  CONSTRAINT sessions__fkey__owner
    FOREIGN KEY ("owner")
    REFERENCES users ("id")
    ON UPDATE CASCADE
    ON DELETE CASCADE
) WITH (OIDS = FALSE);

-- Scann indexes
CREATE INDEX sessions__idx__expires    ON sessions USING btree ("expires");
CREATE INDEX sessions__idx__fkey_owner ON sessions USING btree ("owner");

-- Auto clean old sessions
CREATE FUNCTION sessions__delete_old_rows() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  DELETE FROM sessions WHERE "expires" < timezone('UTC', now());
  RETURN NULL;
END; $$;
CREATE TRIGGER sessions__delete_old_rows__trigger
  AFTER INSERT OR UPDATE ON sessions FOR EACH STATEMENT
  EXECUTE PROCEDURE sessions__delete_old_rows();
