const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const knex = require("knex")({
  client: "pg",
    connection: {
      // host: process.env.DB_HOST || "127.0.0.1",
      host: '127.0.0.1',
      port: process.env.DB_PORT || 8080,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
});

require("dotenv").config({
  path: "./.env.local",
});

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));


app.get('/', async (req, res) => {

  try {
    let testData = await knex.select('*').table('kanji');
    res.send(testData);

  } catch (err) {
    console.log(err);
  }

  // let test = await knex.select('*').fromRaw('SELECT * FROM kanji');

  // const something = await knex
  // .select("*")
  // .from("kanji")
  // .then(data => {
  //  return data
  // })

  // res.status(200).send(test);  
});
  
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


  // const kanjiList = await knex.select("*").from("kanji").then((kanji) => {return (kanji)});
  // res.status(200).send(kanjiList);
  // res.status(200).send("Hello world");
 
// app.get()

// knex("kanji").select("*").then((kanji) => {return res.json(kanji)})

// // getAllKanji(id) {
//   return knex
//     .select({
//       id: 'id',
//       lastName: 'last_name',
//       firstName: 'first_name',
//       email: 'email',
//       address: 'address',
//       city: 'city',
//       region: 'region',
//       postalCode: 'postal_code',
//       country: 'country',
//     })
//     .from(CUSTOMER_TABLE)
//     .where({
//       id: id,
//     })
//     .first();
// },





// async function getAll() {
//   return await knex
//     .select("*")
//     .from("kanji")
// }

// app.get('/user', async (req, res) => {
//   const kanjiList = await getAll();
//   res.status(200).send(kanjiList)
// })

// app.get('/testing', async (req, res) => {
//   const user = await User.findOne({ email: req.body.email })
// })

// app.post('/signup', async (req, res) => {
//   const { email, firstName } = req.body
//   const user = new User({ email, firstName })
//   const ret = await user.save()
//   res.json(ret)
// })


// async index(req, res) {
//   await getAll();
//   res.render("pages/customers/index", {
//     customers
//   });
// },