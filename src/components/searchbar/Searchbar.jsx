import React from 'react';
import '../searchbar/searchbar.css';
// personalized icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// custom manage hooks
import SearchHook from '../../hooks/SearchbarHook';
// Apikey
import Apikey from '../../utils/Apikey';
const Searchbar = () => {
  // apikey to fetch
  const AK = Apikey;
  // hooks
  const [bindContent, content] = SearchHook();
  // icons
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  // fetch test

  const handleGet = () => {
    const apikey = AK.public;
    fetch(
      `http://gateway.marvel.com/v1/public/comics?apikey=${apikey}`
      // `https://gateway.marvel.com:3000/v1/public/characters/ironman?apikey=${apikey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
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
