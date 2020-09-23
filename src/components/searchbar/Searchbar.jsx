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

  // Fetch by custom hook a single heroe info detailed
  const handleGet = async () => {
    // check if the input camp is not empty
    if (content !== '') {
      // require timestamp and hash to use marvel_API
      const data = await fill(content);

      // rellenar con la info del callback la data de app
      // console.log(data.results);
      fillByType(data.results);
    } else {
      alert('Escribe el nombre de un super');
    }
  };
  // Send form with enterkey
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleGet();
    }
  };
  return (
    <div onKeyDown={handleKeyDown}>
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
