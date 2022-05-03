#Kanji Kards

Sup Nerds!

Using the best possible agile practices, we have created a cutting edge app that tests your knowledge of Kanji. If you can successfully match all of the cards with their correct partners then you win the coveted right to add your name to the highscore list. Strangers walking down the street will have to pick their jaws up off the floor as you walk by and they will cry themselves to sleep at night, praying that they too could achieve this feat. 

The game allows you to select two cards and, if they match, they remain face up. If the cards do not match, then the cards will turn back over. 

Currently you can cheat in the game, though if you do you should take a long hard look in the mirror and think about what you have done. Something you could do to remedy this shame is to implement a fix to prevent cheaters like you from taking advantage.

[TL;DR]: Our app is awesome yo! also - make a .env file to connect your db to your server.

subsequent functionality:

The To-Do list can be found inside the organisation project tab.

examples of things to do:

[ ] update css
[ ] implement a user feature
[ ] add more kanji to the kanji database
[ ] allow users to select a subset of kanji to practice
[ ] split front-end into components
[ ] add code to prevent cheating
[ ] add a leaderboard feature


Advanced requirements

[ ] implement spaced repetition algorithm to allow for better learning.

## Setting up your local Database 

Start `psql` in a new terminal.
In your psql terminal please run the following code to create a database: 

`CREATE DATABASE kanji_kards;`

Next create an `.env` file: 
create a file `.env.local`
Inside the file please use the following code:

   
  ``` DB_NAME=kanji_kards```
  ``` DB_USER=```
   ```DB_PASSWORD=NULL```

In your non-psql terminal, run the following commands:
`npm run migrate` or `npx knex migrate:latest` to create tables.
`npm run seed` or `npx knex seed:run` to run the seed. 

Be sure to check your tables in psql to check if you have migrated and seeded correctly!


In the project directory, you can run:

# `npm start` will start the React Dev Server.

# `npm run server` will start the Express server.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

# `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


