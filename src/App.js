import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MovieDetails from './components/MovieDetails';
import ErrorBoundary from './components/ErrorBoundary';


const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<ErrorBoundary><h2>404 Not Found</h2></ErrorBoundary>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
