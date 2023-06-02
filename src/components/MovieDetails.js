import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { title } = useParams();

  // Fetch movie details based on the title parameter and display the details

  return (
    <div>
      <h2>Movie Details: {title}</h2>
      {/* Display the movie details */}
    </div>
  );
};

export default MovieDetails;

