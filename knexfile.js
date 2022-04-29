require("dotenv").config({
  path: "./.env.local",
});
const pg = require("pg"); 
  /**
   * @type { Object.<string, import("knex").Knex.Config> }
   */
// module.exports = {
//   development: {
//     client: "pg",
//     connection: {
//       host: '127.0.0.1',
//       // port: 8080 || process.env.DB_PORT,
//       database: process.env.DB_NAME,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//     },
//     migrations: {
//       directory: "./db/migrations",
//     },
//     seeds: {
//       directory: "./db/seeds",
//     },
//   }
// };



module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: { directory: './db/seeds' },
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      host: "https://cc26-kanji-memory-game.herokuapp.com/",
    },
    ssl: {
      rejectUnauthorised: false
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: { directory: './db/seeds' }
  },
};


