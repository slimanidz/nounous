exports.up = async (knex) => {
  await knex.schema.dropTable("services");
};

exports.down = async (knex) => {
  await knex.schema.dropTable("services");
};
