# Kanji Kards

Sup Nerds!

Using the best possible agile practices, we have created a cutting edge app that tests your knowledge of Kanji. If you can successfully match all of the cards with their correct partners then you win the coveted right to add your name to the highscore list. Strangers walking down the street will have to pick their jaws up off the floor as you walk by and they will cry themselves to sleep at night, praying that they too could achieve this feat. 

The game allows you to select two cards and, if they match, they remain face up. If the cards do not match, then the cards will turn back over. 

~~Currently you can cheat in the game, though if you do you should take a long hard look in the mirror and think about what you have done. Something you could do to remedy this shame is to implement a fix to prevent cheaters like you from taking advantage.~~

***

## Kanji Kards 2.0

We updated some feature;

in frontend<br>
*Creates React Components<br>
*Cheating disabled as a feature <br>
*Add Leaderboard<br>
*Fixed Submit Button<br>

in backend<br>
*Cleans up DB<br>
*Adds MORE Kanji<br>

## Setting up your local Database 

Start `psql` in a new terminal.<br>
In your psql terminal please run the following code to create a database: <br>

`CREATE DATABASE kanji_kards;`

Next create an `.env` file: <br>
create a file `.env.local`<br>
Inside the file please use the following code:<br>

   
  ``` DB_NAME=kanji_kards```<br>
  ``` DB_USER=```<br>
   ```DB_PASSWORD=NULL```<br>

In your non-psql terminal, run the following commands:<br>
`npm run migrate` or `npx knex migrate:latest` to create tables.<br>
`npm run seed` or `npx knex seed:run` to run the seed. <br>
<br>
Be sure to check your tables in psql to check if you have migrated and seeded correctly!<br>

***

## Setting your Server
In the project directory, you can run:<br>

### ```npm start``` will start the React Dev Server.<br>

### ```npm run server``` will start the Express server.<br>

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### ```npm run eject``` will eject the project.<br>

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


