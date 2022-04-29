/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    // return knex.schema.createTable("kanji", function (table) {
    //   table.increments("id").primary();
    //   table.string("name", 32).notNullable();
    //   table.string("meaning", 32).notNullable();
    //   table.boolean("flipped").notNullable();
    // });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    knex.schema.dropTable("kanji");
  };
  