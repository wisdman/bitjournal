SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- Prevent change id feeld trigger
CREATE FUNCTION "prevent_change_id_trigger"() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF (OLD.id <> NEW.id) THEN
    RAISE EXCEPTION '"id" can not be changed' USING ERRCODE = '23000';
  END IF;
  RETURN NEW;
END;
$$;
