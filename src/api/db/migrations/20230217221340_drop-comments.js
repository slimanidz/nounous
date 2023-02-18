exports.up = async (knex) => {
  await knex.schema.dropTable("comments");
};

exports.down = async (knex) => {
  await knex.schema.dropTable("comments");
};
