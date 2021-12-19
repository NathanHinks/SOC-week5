const { database } = require('./db-connection');

async function getAllBootcampers() {
  const databaseResponse = await database.query(
    'SELECT * FROM bootcamper_scores'
  );

  // the list of bootcampers we want is stored on the "rows" key, so we just return this
  return databaseResponse.rows;
}

async function increaseBootcamperScore(bootcamperId) {
  const databaseResponse = await database.query(
    `SELECT * FROM bootcamper_scores WHERE ID = ${bootcamperId}`
  );
  // this time we need the bootcamper we want is the first value in the "rows" array ("rows" is always an array).
  const bootcamper = databaseResponse.rows[0];
  const existingScore = bootcamper.score;
  const newScore = existingScore + 1;

  await database.query(
    `UPDATE bootcamper_scores SET score = ${newScore} WHERE ID = ${bootcamperId};`
  );
}

module.exports = {
  getAllBootcampers,
  increaseBootcamperScore,
};
