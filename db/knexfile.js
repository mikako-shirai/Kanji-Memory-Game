require("dotenv").config({
  path: "./.env.local",
});
const pg = require("pg");
  /**
   * @type { Object.<string, import("knex").Knex.Config> }
   */
module.exports = {
  development: {
    client: "pg",
    connection: {
      // host: process.env.DB_HOST || "127.0.0.1",
      host: '127.0.0.1',
      port: process.env.DB_PORT || 8080,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  }
};



// module.exports = {
//   client: "pg",
//   connection: {
//     // host: process.env.DB_HOST || "127.0.0.1",
//     host: '127.0.0.1',
//     port: process.env.DB_PORT || 8080,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//   },
//   migrations: {
//     directory: "./db/migrations",
//   },
//   seeds: {
//     directory: "./db/seeds",
//   },
// };
  