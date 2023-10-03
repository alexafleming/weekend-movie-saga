const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const query = `SELECT * FROM movies_genres
  JOIN genres ON movies_genres.genre_id = genres.id
  WHERE movies_genres.movie_id = $1`;
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Getting genre details', err);
      res.sendStatus(500)
    })
});

module.exports = router;