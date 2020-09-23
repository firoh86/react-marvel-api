import React from 'react';

import './searchbar.css';
// personalized icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// custom manage hooks for forms
import SearchHook from '../../hooks/SearchbarHook';
// custom search tool hook
import searchAPI from '../../hooks/ApiSearch';

const Searchbar = ({ fillByType }) => {
  // hooks
  const [bindContent, content] = SearchHook();

  const [fill] = searchAPI();
  // icons
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  // fetch test

  const handleGet = async () => {
    // require timestamp and hash to use marvel_API
    const data = await fill(content);

    // rellenar con la info del callback la data de app
    // con data.result
    console.log(data.data.results);
    fillByType(data.data.results);
  };

  return (
    <div className="searchbar" id="searchBar">
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
