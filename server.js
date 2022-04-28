const express = require('express');
const knex = require("knex")
const app = express();
// const cors = require('cors');
// const morgan = require('morgan');
require("dotenv").config({
  path: "./.env.local",
});

const config = require('./knexfile');
const db = knex(config.development);

const port = process.env.PORT || 8080;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use(morgan("dev"));

app.get('/', async (req, res) => {

  try {
    let testData = await db.select('*').from('kanji');
    res.send(testData).status(200);

  } catch (err) {
    console.log(err);
  }

});
  
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

