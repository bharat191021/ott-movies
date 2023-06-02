import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMovie = {
      title,
      genre,
    };

    axios.post('http://localhost:3000/api/movies', newMovie)
      .then(response => {
        console.log('Movie added successfully:', response.data);
        // Reset form fields
        setTitle('');
        setGenre('');
      })
      .catch(error => {
        console.error('Error adding movie:', error);
      });
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={event => setGenre(event.target.value)}
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;



