exports.up = async (knex) => {
  await knex.schema.alterTable("users", (table) => {
    table.text("role").notNullable().default("USER");
  });
  await knex.schema.alterTable("nounous", (table) => {
    table.text("localite").notNullable();
    table.text("situation").notNullable();
    // table.image("image").notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.alterTable("users", (table) => {
    table.dropColumn("role");
  });
  await knex.schema.alterTable("nounous", (table) => {
    table.dropColumn("localite");
    table.dropColumn("situation");
    // table.dropColumn("image");
  });
};
