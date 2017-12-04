SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- User roles
CREATE TYPE blocks AS ENUM (
  'A1', -- Top banner
  'A2', -- After video
  'A3', -- After article
  'B1', -- tower 1
  'B2', -- tower 2
  'B3', -- tower 3
  'M1', -- mobile 1
  'M2', -- mobile 2
  'M3'  -- mobile 3
);
