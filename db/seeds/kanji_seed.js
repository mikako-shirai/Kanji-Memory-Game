/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('kanji').del()
  await knex('kanji').insert([
    {id: 1, name: "fire", meaning: "fire", flipped: false},
    {id: 2, name: "火", meaning: "fire", flipped: false},
    {id: 3, name: "water", meaning: "water", flipped: false},
    {id: 4, name: "水", meaning: "water", flipped: false},
    {id: 5, name: "earth", meaning: "earth", flipped: false},
    {id: 6, name: "土", meaning: "earth", flipped: false},
    {id: 7, name: "tree", meaning: "tree", flipped: false},
    {id: 8, name: "木", meaning: "tree", flipped: false},
    {id: 9, name: "gold", meaning: "gold", flipped: false},
    {id: 10, name: "金", meaning: "gold", flipped: false},
    {id: 11, name: "sun", meaning: "sun", flipped: false},
    {id: 12, name: "日", meaning: "sun", flipped: false}
  ]);
};
