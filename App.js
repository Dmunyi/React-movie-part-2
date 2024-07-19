import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieCard from './MovieCard';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Avengers',
      description: 'This is Avengers',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmW4D967PTPKuR-O4u0w69cUkisyxGZbZww&s',
      rating: 6,
    },
    {
      title: 'Batman',
      description: 'This is Batman',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqyqexYPHt6WFgJggsIgV4opz9BSY1QbNbw&s',
      rating: 3,
    },
    {
      title: 'Spiderman',
      description: 'This is Spiderman',
      posterURL: 'https://i.pinimg.com/736x/2d/bd/24/2dbd24920ddadf07f2791356a4b79ebd.jpg',
      rating: 5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleFilterChange = (filter) => {
    const filteredMovies = movies.filter((movie) => {
      if (filter.title &&!movie.title.includes(filter.title)) return false;
      if (filter.rating && movie.rating!== parseInt(filter.rating, 10)) return false;
      return true;
    });
    setFilteredMovies(filteredMovies);
  };

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  const handleInputChange = (e) => {
    setNewMovie({...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <h2>Add a new movie</h2>
      <input
        type="text"
        name="title"
        value={newMovie.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={newMovie.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="posterURL"
        value={newMovie.posterURL}
        onChange={handleInputChange}
        placeholder="Poster URL"
      />
      <input
        type="number"
        name="rating"
        value={newMovie.rating}
        onChange={handleInputChange}
        placeholder="Rating"
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default App;