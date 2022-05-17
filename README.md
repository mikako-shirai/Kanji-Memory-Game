# CC26 Legacy Project - Kanji Kards

Using the best possible agile practices, we have created a cutting edge app that tests your knowledge of Kanji. If you can successfully match all of the cards with their correct partners then you win the coveted right to add your name to the highscore list. Strangers walking down the street will have to pick their jaws up off the floor as you walk by and they will cry themselves to sleep at night, praying that they too could achieve this feat.  
  
The game allows you to select two cards and, if they match, they remain face up. If the cards do not match, then the cards will turn back over.  
  
## Kanji Kards 2.0 - updated features
#### frontend  
Created React components  
Disabled cheating  
Added a leaderboard  
Fixed the submit button for the leaderboard  

####backend  
Refactored the database  
Added more kanjis  
  
  
## Setting up your local database 

1. Start PostgreSQL in a new terminal  
```
$ psql -U postgres
```  
2. In your psql terminal, run the following to create a database  
```
$ CREATE DATABASE kanji_kards;
```  
3. Create an `.env` file in the root directory  
4. Add the following code to the `.env` file     
```
DB_NAME=kanji_kards
DB_USER=
DB_PASSWORD=NULL
```  
5. In your regular (not psql) terminal, run the following command to create tables  
```
$ npm run migrate
```  
6. Run the following command to run the seed  
```
$ npm run seed
```  
(Be sure to check your tables in psql to check if you have migrated and seeded correctly)  
  
  
## Setting your server
In the root directory, run the following to start the React dev server.  
```
$ npm start
```    
  
In another terminal, run the following to start the Express server.  
```
$ npm run server
```  
  
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.  
  
  