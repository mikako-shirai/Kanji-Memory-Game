const express = require('express');
const knex = require("knex")
const app = express();
// const cors = require('cors');
// const morgan = require('morgan');
require("dotenv").config({
  path: "./.env.local",
});
 
const config = require('./knexfile');
const environment = process.env.DATABASE_URL ? "production" : "development"
const db = knex(config[environment]);

const port = process.env.PORT || 8080;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use(morgan("dev"));

app.get('/kanji', async (req, res) => {
  try {
    let allKanji = await  db.select('*').from('kanji');
    res.send(allKanji).status(200);
  } catch (err) {
    console.log(err);
  }
}); 
  
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


