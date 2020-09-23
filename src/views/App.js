import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import '../views/App.css';
// components
import Searchbar from '../components/Searchbar/Searchbar';
import Card from '../components/HeroeCard/HeroeCard';
import Modal from '../components/Modal/ModalCard';
// personalized icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// Apikey
import { URL, API_KEY, HASH } from '../constants';
// Manage global dark mode
import Theme from '../hooks/Theme';

function App() {
  // Dark theme manager hook
  const [switchTheme, darkMode] = Theme();
  // To manage the window offset
  const [scrollPosition, setSrollPosition] = useState(0);
  // Data from the fetch
  const [data, setData] = useState();
  const [modaldata, setModalData] = useState();
  const [showModal, setShowModal] = useState(false);

  // icons
  const Spinner = <FontAwesomeIcon icon={faSpinner} className="spinner" />;
  // toggle modal window

  // function to fill based in searchtypes
  const fillByType = info => {
    // as Default the type is a singular heroe
    setData(info);
  };
  // Modal show controls
  const showmodal = () => {
    setShowModal(showModal => !showModal);
  };
  const fillModal = info => {
    setModalData(info);
    showmodal();
  };
  // Navigate to offset Anchor to top
  const navigateToUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // control on a state var the offset to switch the anchor button
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };
  const fill = async () => {
    try {
      const { data: heroes } = await Axios(
        `${URL}ts=1&apikey=${API_KEY}&hash=${HASH}`
      );

      setData(heroes.data.results);
    } catch (err) {
      console.err(`Error: ${err}`);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    !data && fill();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  return (
    <div className={`${darkMode} App`}>
      <div className="searchbar">
        <Searchbar fillByType={fillByType} />
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={switchTheme} />

          <span className="slider round"></span>
        </label>
      </div>

      <h3>Listado de Héroes</h3>

      {data ? (
        <div className="cards-container">
          {data.map((item, idx) => (
            <Card key={idx} info={item} fillmodal={fillModal}></Card>
          ))}
        </div>
      ) : (
        Spinner
      )}
      {showModal && modaldata ? (
        <>
          <div className="blurCover" />
          <div className="modal-container">
            <Modal info={modaldata} showmodal={() => showmodal()} />
          </div>
        </>
      ) : null}
      {scrollPosition > 600 && (
        <button className="anchor-button" onClick={navigateToUp}>
          Up!
        </button>
      )}
    </div>
  );
}

export default App;
