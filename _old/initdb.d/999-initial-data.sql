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

INSERT INTO users("title", "email", "roles", "password", "totp")
  VALUES ('Ruslan',
          'adsokolovsky@gmail.com',
          '{user,su}',
          '0d6589f32728962a9b7956f251ddbfca746ab1bcc58e590ef6b0d798bb20dcd246ddc7032273cc68ce44a0d927330bcba6c4695ad5244a3f682fefd19e7b175b',
          '5587ebba3ef8be66a334890d6102c558a6dd25b888ff33c266b9887c001c6955'
         );

INSERT INTO users("title", "email", "roles", "password", "totp")
  VALUES ('Lada',
          'vakarlada@gmail.com',
          '{user,su}',
          'cac3c158792ff9881093ab256eb39db70517d714ad3cb5f32677ba34c9756df0dac72282c38e74489954a9642f3f487f49c16311ac92d114af79d1d63909dba4',
          'fd8cede868095d9d5f42d5c31166f412711e9536d80f74fc2a1c627c3205e33c'
         );
