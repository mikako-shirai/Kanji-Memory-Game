/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */ //delete this table
exports.up = function(knex) {
    return knex.schema.createTable("test", function(table) {
        table.increments("id").primary();
        table.string("test", 32).notNullable();
      })
};
//this table is not needed 
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable("test");
};
