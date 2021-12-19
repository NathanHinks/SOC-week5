// allows access to the database credentials in .env file
require('dotenv').config();
// npm package used to connect to Postgres database
const Pool = require('pg-pool');

// connection string needed to connect to database on heroku:
const connectionString = `postgresql://${process.env.USERNAME}:${process.env
  .PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env
  .DATABASE}?&sslmode=require`;

// sets up the connection to the database:
const database = new Pool({
  connectionString: connectionString,
});

module.exports = {
  database,
};
