// this is a slightly hacky way to get around the server erroring when it is receiving requests locally
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// allows access to the database credentials in .env file
require('dotenv').config();

const { getAllBootcampers, increaseBootcamperScore } = require('./models');
const express = require('express');
const app = express();

// why this is needed: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
const cors = require('cors');
app.use(cors());

// gets all the bootcampers and sends back to front end
app.get('/', async function(request, response) {
  const bootcampers = await getAllBootcampers();

  response.send(bootcampers);
});

// increases the score by one for a given bootcamper
app.put('/:bootcamperId', async function(request, response) {
  const id = request.params.bootcamperId;
  await increaseBootcamperScore(id);

  response.send('updated');
});

app.listen(8000, () => {
  console.log('App listening on port 8000!');
});
