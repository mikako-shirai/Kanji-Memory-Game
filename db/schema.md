DATABASE kanji_kards

TABLE kanji
 
 columns: 
 id increments, primary key
 name string(32) notNull 
 meaning string (32)notNull



TABLE leaderboard 

 columns 
 id increments primary 
 name string (32)
 score int notNull
