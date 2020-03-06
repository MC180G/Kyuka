const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Sequelize = require('sequelize');

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// initialize an instance of Sequelize
const sequelize = new Sequelize({
  database: users_db,
  username: root,
  password: "",
  dialect: mysql,
});
// check the databse connection
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database:", err));
// add a basic route
app.get('/', function(req, res) {
  res.json({ message: 'Express is up!' });
});
// start the app
app.listen(3000, function() {
  console.log('Express is running on port 3000');
});