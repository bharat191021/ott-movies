import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onCreate }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass search criteria to parent component for handling
    onSearch({ title });
  };

  const handleCreate = () => {
    // Execute the create action
    onCreate();
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <button className="create-button" onClick={handleCreate}>Create</button>
    </div>
  );
};

export default SearchBar;


