require("dotenv").config();

module.exports = {
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: `${process.cwd()}/src/api/db/migrations`,
  },
  seeds: {
    directory: `${process.cwd()}/src/api/db/seeds`,
  },
};
