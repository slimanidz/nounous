require("dotenv").config();

module.exports = {
  client: "pg",
  connection: process.env.DB_URL,
  migrations: {
    tableName: "knex_migrations",
    directory: `${process.cwd()}/src/api/db/migrations`,
  },
  seeds: {
    directory: `${process.cwd()}/src/api/db/seeds`,
  },
};
