/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable("leaderboard", function (table) {
      table.increments("id").primary();
      table.string("name", 32).notNullable();
      table.integer("score").notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    knex.schema.dropTable("leaderboard");
  };
  