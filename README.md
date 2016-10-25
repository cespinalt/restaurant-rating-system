# restaurant-rating-system

Step 1.
Go to server/config/environment and change the development.js file with the setting that work best for you.
Run npm start - This will start the server, at this point the Db is probably empty if this is the first time starting the app

Step 2.
In a separete tab run node server/data.seed.js - This will seed the database. Add more data if you'd like.

Step 3.
Use the app. When rating you'll be prompt for a username, go to the data.seed.js and grab one of the username available.

Note: As there's no authentication, the users password is store as it is on the database. If we want to proceed
add authentication as a feature, then we can implement bycript-nodejs to salt and hash the password.
