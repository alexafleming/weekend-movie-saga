import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './MovieList.css';

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const movieDetails = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <main>
      <h1>MOVIE LIST</h1>

      <Grid container spacing={2} className="movies">
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card onClick={() => movieDetails(movie.id)} className="movie-card">
              <img src={movie.poster} alt={movie.title} className="card-image" />
              <CardContent>
              <Typography variant="h6" component="div" className="movie-title">
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default MovieList;