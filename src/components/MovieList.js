import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleDelete = (movie) => {
    // Remove the movie from the list
    setMovies((prevMovies) => prevMovies.filter((m) => m.title !== movie.title));
  };

  // Get current movies based on pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Movie List</h2>
      {currentMovies.map((movie) => (
        <div key={movie.title} className="movie-item">
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
          <p>IMDb Rating: {movie.imdbRating}</p>
          <Link to={`/movies/${movie.title}`} className="edit-link">Edit</Link>
          <button className="delete-button" onClick={() => handleDelete(movie)}>Delete</button>
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(movies.length / moviesPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieList;




