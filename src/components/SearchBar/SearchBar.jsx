import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import styles from '../SearchBar/SearchBar.module.css'; 

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search query');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchbarContainer}> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className={styles.searchButton}>
          <FaSearch /> 
          Search
        </button> 
      </form>
    </header>
  );
};

export default SearchBar;