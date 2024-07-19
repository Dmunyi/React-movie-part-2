// MovieDescription.js
import React from 'react';

const MovieDescription = ({ movie }) => {
  return (
    <div className="movie-description">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="100%"
        height="500"
        src={movie.trailerURL}
        frameborder="0"
        allowfullscreen
      />
      <button onClick={() => window.history.back()}>Back to Home</button>
    </div>
  );
};

export default MovieDescription;