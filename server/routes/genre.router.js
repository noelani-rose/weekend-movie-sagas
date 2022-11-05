const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  let movieId = [req.params.id]
  const sqlText = `
  SELECT
  "genres"."name"
  FROM "genres"
  JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
  JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
  WHERE "movies"."id" = $1;
  `;

  pool.query(sqlText, movieId)

  .then((dbRes) => {
    res.send(dbRes.rows)
    console.log('db res from movie with genre is', dbRes.rows)
  })
  .catch((err) => {
    console.log('error getting genres for movie with id', err)
  })
});

module.exports = router;