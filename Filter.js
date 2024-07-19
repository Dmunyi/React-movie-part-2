import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onFilterChange({ title: e.target.value, rating });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilterChange({ title, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Search by title"
      />
      <input
        type="number"
        value={rating}
        onChange={handleRatingChange}
        placeholder="Search by rating"
      />
    </div>
  );
};

export default Filter;