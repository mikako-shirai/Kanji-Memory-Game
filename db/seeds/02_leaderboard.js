/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('leaderboard').del()
  await knex('leaderboard').insert([
    {id: 1, name: 'Andrew', score:15},
    {id: 2, name: 'Miguel', score:10},
    {id: 3, name: 'Michelle', score:15}
  ]);
};
