import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.css';

// SearchBar component
const SearchBar = () => {
  // Declare state variables for query and mediaType
  const [query, setQuery] = useState('');
  
  // Set default mediaType to 'all'
  const [mediaType, setMediaType] = useState('all');

  // Declare navigate function from useNavigate hook
  const navigate = useNavigate();

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/results?term=${query}&media=${mediaType}`);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className="search-select">
        <option value="all">All</option>
        <option value="music">Music</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
      </select>
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
