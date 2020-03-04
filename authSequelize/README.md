# authMongoose
App demonstrating use of passport with mongoose.

npm install

Create a .env file at the root (same location as the server file) and add PASSPORT_SECRET=developer
You may change the word 'developer' to whatever you like. This word is used when encrypting and decrypting the user's password
Also add DB_PASSWORD=developer (change developer to whatever your password is)

Files/Folders to analyze for your understanding of passport:
- server.js - note what is required and used for passport
- routes: read thru the api/login and api/register routes, note the use of isAuthenticated in the api/authorized route. This route is only accessible if the user is signed in. See config/middleware/isAuthenticated.js for what happens when isAuthenticated is called. When making ajax/axios calls from the front-end, you do not need to pass the user's id for any actions that require it. Within the body of the responding route on your back-end, you have access to req.user which holds all of the user's information from the database, including req.user.id (note that its id here because that's the format in the mysql database and may be different in other databases). So for example if you were writing a record to the database that needs the users id recorded, just pass req.user.id. The api/logout route is used to log the user out.
- models/user.js - note how bcrypt-nodejs is required at the top, and User.prototype.validPassword and User.hook are used toward the bottom. When a user is registered, User.hook is used to encrypt the password before saving it to the database. When a user signs in, User.prototype.validPassword is used to encrypt the entered password and compare it to the saved password in the database. This is all done for you in the boilerplate code.
- config/passport.js - this is boilerplate code for passport, just make sure the path to your user model is correct, and that you tell it whether you are using a unique username or the email address as the username, where indicated.
- config/middleware/isAuthenticated.js - this file is required at the top of our routes file and is called with isAuthenticated within our protected routes that should only be accessible by a user that is signed in. If the user is signed in the "next" callback method is invoked and continues with the code in the body of the route. If the user is not signed in the message "no auth" (or a message of your choice) is sent back to the front-end.
- client/src/pages - Basic login and register components have been provided for demonstration. Specifically they demonstrate one way that you could display messages for your user for any errors that return, or messages based on your validation of what the user types in the inputs. These are not meant for you to copy and paste, but for you to gain an understanding of how it can be done, and then make it your own.
- Important - keep in mind that the components used in this app are built based on the css framework used, so be careful with copy/pasting as the components may not look as intended if you use a different css framework.