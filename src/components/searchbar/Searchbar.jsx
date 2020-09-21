import React from 'react';
import './searchbar.css';
// personalized icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// custom manage hooks
import SearchHook from '../../hooks/SearchbarHook';
// Apikey
import { URL, API_KEY } from '../../constants';
const Searchbar = () => {
  // hooks
  const [bindContent, content] = SearchHook();
  // icons
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  // fetch test

  const handleGet = async () => {
    try {
      const request = await fetch(`${URL}${content}/comics?apikey=${API_KEY}`);
      const data = await request.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        title="buscador"
        {...bindContent}
        value={content}
      />
      <button className="searchbar-button" onClick={handleGet}>
        {searchIcon}
      </button>
    </div>
  );
};

export default Searchbar;
