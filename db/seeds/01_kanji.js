/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('kanji').del()
  await knex('kanji').insert([
    { name: "fire", meaning: "fire", flipped: false},
    { name: "火", meaning: "fire", flipped: false},
    { name: "water", meaning: "water", flipped: false},
    { name: "水", meaning: "water", flipped: false},
    { name: "earth", meaning: "earth", flipped: false},
    { name: "土", meaning: "earth", flipped: false},
    { name: "tree", meaning: "tree", flipped: false},
    { name: "木", meaning: "tree", flipped: false},
    { name: "gold", meaning: "gold", flipped: false},
    { name: "金", meaning: "gold", flipped: false},
    { name: "sun", meaning: "sun", flipped: false},
    { name: "日", meaning: "sun", flipped: false},
    { name: "mountain", meaning: "mountain", flipped: false},
    { name: "山", meaning: "mountain", flipped: false},
    { name: "river", meaning: "river", flipped: false},
    { name: "川", meaning: "river", flipped: false},
    { name: "moon", meaning: "moon", flipped: false},
    { name: "月", meaning: "moon", flipped: false},
    { name: "red", meaning: "red", flipped: false},
    { name: "赤", meaning: "red", flipped: false}, 
    { name: "blue", meaning: "blue", flipped: false},
    { name: "青", meaning: "blue", flipped: false},
    { name: "purple", meaning: "purple", flipped: false},
    { name: "紫", meaning: "purple", flipped: false}
  ]);
};
