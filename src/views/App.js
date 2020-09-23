import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import '../views/App.css';
// components
import Searchbar from '../components/SearchBar/Searchbar';
import Card from '../components/HeroeCard/HeroeCard';
import Modal from '../components/Modal/ModalCard';
// personalized icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// Apikey
import { URL, API_KEY, HASH } from '../constants';

function App() {
  const [data, setData] = useState();
  const [modaldata, setModalData] = useState();
  const [showModal, setShowModal] = useState(false);

  // icons
  const Spinner = <FontAwesomeIcon icon={faSpinner} className="spinner" />;
  // toggle modal window

  // function to fill based in searchtypes
  const fillByType = (info) => {
    setData(info);
    console.log(data);
  };
  // Modal show controls
  const showmodal = () => {
    setShowModal((showModal) => !showModal);
  };
  const fillModal = (info) => {
    setModalData(info);
    showmodal();
  };
  // Navigate to offset Anchor to top
  const navigateToUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fill = async () => {
    try {
      const { data: heroes } = await Axios(
        `${URL}ts=1&apikey=${API_KEY}&hash=${HASH}`
      );
      console.log(heroes);

      setData(heroes.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    !data && fill();
  }, [data]);
  console.log(window.pageXOffset);

  return (
    <div className="App">
      <Searchbar fillByType={fillByType} />
      <h3 className="Heroes">Listado de Héroes</h3>

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

      <button href="" className="anchor-button" onClick={navigateToUp}>
        Up!
      </button>
    </div>
  );
}

export default App;
