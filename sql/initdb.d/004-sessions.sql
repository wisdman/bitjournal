SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = private;

-- User sessions datatable
CREATE TABLE sessions (
  id char(128) NOT NULL DEFAULT encode(digest(uuid_generate_v1()::text || uuid_generate_v4()::text, 'sha512'), 'hex'),
  ip inet DEFAULT NULL,
  expires timestamp without time zone NOT NULL,
  owner uuid NOT NULL,

  CONSTRAINT sessions__idx_pkey__id PRIMARY KEY (id),

  CONSTRAINT users__check__id CHECK (id ~ '^[0-9a-f]{128}$'),

  CONSTRAINT sessions__fkey__owner
    FOREIGN KEY (owner)
    REFERENCES users (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) WITH (OIDS = FALSE);

-- Scann indexes
CREATE INDEX sessions__idx__expires    ON sessions USING btree (expires);
CREATE INDEX sessions__idx__fkey_owner ON sessions USING btree (owner);

-- Auto update expires
CREATE FUNCTION sessions__update_expires_trigger() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.expires = timezone('UTC', now() + '1 month'::interval);
  RETURN NEW;
END; $$;
CREATE TRIGGER sessions__trigger__update_expires_trigger
  BEFORE INSERT OR UPDATE ON sessions FOR EACH ROW
  EXECUTE PROCEDURE sessions__update_expires_trigger();

-- Auto clean old sessions
CREATE FUNCTION sessions__delete_old_rows_trigger() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  DELETE FROM private.sessions WHERE expires < timezone('UTC', now());
  RETURN NULL;
END; $$;
CREATE TRIGGER sessions__trigger__delete_old_rows_trigger
  AFTER INSERT OR UPDATE ON sessions FOR EACH STATEMENT
  EXECUTE PROCEDURE sessions__delete_old_rows_trigger();

-- Start new user session
CREATE FUNCTION public.sessions__save(_id char(128), _owner uuid, _ip inet) RETURNS char(128)
LANGUAGE plpgsql AS $$
DECLARE
  result char(128);
BEGIN
  IF (_id is NULL) THEN
    INSERT INTO private.sessions (owner, ip) VALUES (_owner, _ip) RETURNING id INTO result;
  ELSE
    UPDATE private.sessions SET ip = _ip WHERE id = _id RETURNING id INTO result;
  END IF;
  RETURN result;
END; $$;
