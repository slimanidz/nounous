require("dotenv").config();

module.exports = {
  client: "pg",
  // pour vercel connexion:process.env.DB_URL
  // Pour le local il faut mettre tous

  // connection: process.env.DB_URL,
  connection: {
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  },

  migrations: {
    tableName: "knex_migrations",
    directory: `${process.cwd()}/src/api/db/migrations`,
  },
  seeds: {
    directory: `${process.cwd()}/src/api/db/seeds`,
  },
};
