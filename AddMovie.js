import React, { useState } from 'react';

const AddMovie = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
    trailerLink: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.description || !newMovie.posterURL || !newMovie.trailerLink) {
      setError('Please fill in all fields.');
      return;
    }
    setMovies([...movies, newMovie]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0,
      trailerLink: ''
    });
    setError('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newMovie.title} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={newMovie.description} onChange={handleInputChange} />
        </label>
        <label>
          Poster URL:
          <input type="text" name="posterURL" value={newMovie.posterURL} onChange={handleInputChange} />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" value={newMovie.rating} onChange={handleInputChange} min="0" max="10" />
        </label>
        <label>
          Trailer Link:
          <input type="text" name="trailerLink" value={newMovie.trailerLink} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Movie</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <img src={movie.posterURL} alt={`${movie.title} poster`} style={{ width: '100px' }} />
            <p>Rating: {movie.rating}</p>
            <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddMovie;
