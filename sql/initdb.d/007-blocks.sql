SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

-- User roles
CREATE TYPE blocks AS ENUM (
  'a1', -- Top banner
  'a2', -- After video
  'a3', -- After article
  'b1', -- tower 1
  'b2', -- tower 2
  'b3', -- tower 3
  'm1', -- mobile 1
  'm2', -- mobile 2
  'm3'  -- mobile 3
);
