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
      host: "ec2-52-5-110-35.compute-1.amazonaws.com",
      database: "demnhcb58h4j47",
      user: "uqiolxrufgqzss",
      password: "689fd35373d840256f08c870cc6294147bc63b33f19f903310d5e266379d6956",
      port: "5432"

      // connectionString: process.env.DATABASE_URL,
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


