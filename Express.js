const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const movies = [
  {
    title: 'Tenet',
    genre: 'Action',
    imdbRating: 7.5
  },
  {
    title: 'Inception',
    genre: 'Sci-Fi',
    imdbRating: 8.8
  },
  {
    title: 'The Dark Knight',
    genre: 'Action',
    imdbRating: 9.0
  },
  {
    title: 'Pulp Fiction',
    genre: 'Crime',
    imdbRating: 8.9
  },
  {
    title: 'Fight Club',
    genre: 'Drama',
    imdbRating: 8.8
  },
  {
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    imdbRating: 9.3
  },
  {
    title: 'The Matrix',
    genre: 'Sci-Fi',
    imdbRating: 8.7
  },
  {
    title: 'Interstellar',
    genre: 'Sci-Fi',
    imdbRating: 8.6
  },
  {
    title: 'The Godfather',
    genre: 'Crime',
    imdbRating: 9.2
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    genre: 'Adventure',
    imdbRating: 8.8
  }
];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/:title', (req, res) => {
  const requestedTitle = req.params.title;
  const movie = movies.find(movie => movie.title === requestedTitle);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

app.post('/api/movies', (req, res) => {
  const newMovie = req.body;

  if (!newMovie.title || !newMovie.genre || !newMovie.imdbRating) {
    res.status(400).json({ error: 'Missing required fields' });
  } else {
    movies.push(newMovie);
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


