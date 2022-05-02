const express = require("express");
const knex = require("knex");
const app = express();
const cors = require('cors');
const path = require('path');
require("dotenv").config({
  path: "./.env.local",
});
const environment = process.env.NODE_ENV ? "development" : "production";
const config = require("./knexfile");
const db = knex(config[environment]);

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.use(cors());


app.get("/kanji", async (req, res) => {
  try {
    let allKanji = await db.select("*").from("kanji");
    res.send(allKanji).status(200);
  } catch (err) {
    console.log(err);
  }
});

app.get("/leaderboard", async (req, res) => {
  try {
    let allLeaderboard = await db.select("*").from("leaderboard");
    res.send(allLeaderboard).status(200);
  } catch (err) {
    console.log(err);
  }
});

app.post("/kanji", async (req, res) => {
  try {
    let newKanji = await db.insert(req.body).into("kanji");
    res.send(newKanji).status(200);
  } catch (err) {
    console.log(err);
  }
});

app.post("/leaderboard", async (req, res) => {
  try {
    let newScore = await db.insert(req.body).into("leaderboard");
    res.send(newScore).status(200);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
