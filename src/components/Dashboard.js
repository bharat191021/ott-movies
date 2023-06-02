import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import SearchBar from './SearchBar';
import axios from 'axios';
import './Dashboard.css'

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [showMovieForm, setShowMovieForm] = useState(false);

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

  const handleSearch = (criteria) => {
    // Handle search action
    console.log('Search criteria:', criteria);
    // Perform search-related actions, such as filtering movies based on the search criteria
  };

  const handleCreate = () => {
    setShowMovieForm(true);
  };

  const handleDelete = (movie) => {
    // Remove the movie from the list
    setMovies((prevMovies) => prevMovies.filter((m) => m.title !== movie.title));
  };

  return (
    <div>
      {showMovieForm && <MovieForm />}
      <Navbar />
      <div className="container">
        <h2>Search Movies</h2>
        <SearchBar onSearch={handleSearch} onCreate={handleCreate} />
        <Sidebar />
        <div className="movie-list">
          {movies.map((movie) => (
            <div className="movie" key={movie.title}>
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
              <p>IMDb Rating: {movie.imdbRating}</p>
              <a href={`/movies/${movie.title}`} className="edit-link">Edit</a>
              <button className="delete-button" onClick={() => handleDelete(movie)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;









