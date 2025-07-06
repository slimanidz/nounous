exports.up = async (knex) => {
  await knex.schema.createTable("services", (table) => {
    table.increments("id");
    table.text("service1");
    table.text("service2");
    table.text("service3");
    table.text("service4");
    table.text("service5");
    table.text("service6");
    table.text("service7");
    table.text("service8");
    table.timestamps(true, true, true);
    table.integer("nounouId").notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("services");
};
