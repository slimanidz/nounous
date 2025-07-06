exports.up = async (knex) => {
  await knex.schema.createTable("messages", (table) => {
    table.increments("id");
    table.text("content").notNullable();
    table.timestamps(true, true, true);
    table.integer("userId").notNullable();
    table.integer("nounouId").notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("messages");
};
