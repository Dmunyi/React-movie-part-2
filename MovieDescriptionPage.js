// MovieDescriptionPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieDescription from './MovieDescription';
import movies from './movies'; 

const MovieDescriptionPage = () => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  return (
    <div className="movie-description-page">
      {movie ? (
        <MovieDescription movie={movie} />
      ) : (
        <p>Movie not found</p>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescriptionPage;
