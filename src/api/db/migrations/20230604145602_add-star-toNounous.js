exports.up = async (knex) => {
  await knex.schema.alterTable("nounous", (table) => {
    table.integer("star").notNullable().default(0);
  });
};

exports.down = async (knex) => {
  await knex.schema.alterTable("nounous", (table) => {
    table.dropColumn("star");
  });
};
