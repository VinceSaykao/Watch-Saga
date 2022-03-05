const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const queryText=`select genres.name
  from movies
  join movies_genres
  on movies.id = movies_genres.movie_id 
  join genres
  on genres.id = movies_genres.genre_id
  where movies.id = $1
  group by movies.title, genres.name;`
  pool
    .query(queryText, req.body) // is it req.body??
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`error on query ${error}`);

    });
});

module.exports = router;


