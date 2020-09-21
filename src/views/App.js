import React, { useState } from 'react';
import '../views/App.css';
// components
import Searchbar from '../components/searchbar/Searchbar';
import Card from '../components/heroeCard/HeroeCard';
function App() {
  const { heroes, setHeroes } = useState();
  return (
    <div className="App">
      <Searchbar />
      <h3 className="Heroes">Listado de Héroes</h3>
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
