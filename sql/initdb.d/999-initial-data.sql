SET statement_timeout = 0;
SET lock_timeout = 0;
SET search_path = public;

INSERT INTO users("title", "email", "roles", "password", "totp")
  VALUES ('Wisdman',
          'wisdman@ajaw.it',
          '{user,su}',
          '11f4216268e04d76a7c541ae23f6d6014387715f19a7122286bf4e6f6abbbe91c843765d9bef17fc9f889f9f744d1a7abbc6b8cead91517d3881599b45c6c362',
          '91bedca81c16b4f2413b01f19b7e545c668cd0b1e9a2e5452e79ea991b0f39ec'
         );
