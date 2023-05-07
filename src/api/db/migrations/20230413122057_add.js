exports.up = async (knex) => {
  await knex.schema.createTable("reponseMessage", (table) => {
    table.increments("id");
    table.text("content");
    table.integer("messageId").notNullable();
    table.timestamps(true, true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("reponseMessage");
};
