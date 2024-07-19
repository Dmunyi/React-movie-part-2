// MovieForm.js
import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailerLink, setTrailerLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({
      title,
      description,
      posterURL,
      rating,
      trailerLink,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Poster URL:
        <input type="text" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
      </label>
      <label>
        Rating:
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      </label>
      <label>
        Trailer Link:
        <input type="text" value={trailerLink} onChange={(e) => setTrailerLink(e.target.value)} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;