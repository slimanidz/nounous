/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("email").notNullable().unique();
    table.text("passwordHash").notNullable();
    table.text("passwordSalt").notNullable();
    table.text("username").notNullable();
    table.timestamps(true, true, true);
  
})
await knex.schema.createTable("dates", (table) => {
    table.increments("id");
    table.timestamps(true, true, true);
    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
  });
  await knex.schema.createTable("clients", (table) => {
    table.increments("id");
    table.text("client").notNullable();

    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamps(true, true, true);

    table
      .integer("dateId")
      .notNullable()
      .references("id")
      .inTable("dates")
      .onDelete("CASCADE");
  });

  await knex.schema.createTable("sommes", (table) => {
    table.increments("id");
    table.text("somme").notNullable();

    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("clientId")
      .notNullable()
      .references("id")
      .inTable("clients")
      .onDelete("CASCADE");
    table
      .integer("dateId")
      .notNullable()
      .references("id")
      .inTable("dates")
      .onDelete("CASCADE");
    table.timestamps(true, true, true);
  });
  await knex.schema.createTable("autres", (table) => {
    table.increments("id");
    table.text("autre").notNullable();
    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("clientId")
      .notNullable()
      .references("id")
      .inTable("clients")
      .onDelete("CASCADE");
    table
      .integer("dateId")
      .notNullable()
      .references("id")
      .inTable("dates")
      .onDelete("CASCADE");
    table.timestamps(true, true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable("autres");
  await knex.schema.dropTable("clients");
  await knex.schema.dropTable("dates");
  await knex.schema.dropTable("users");
};
