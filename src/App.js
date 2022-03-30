import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar';
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <header >
        <Navbar />
      </header>
      <div>
      <ItemListContainer />
      <ItemDetailContainer />
      </div>
      <footer>
      Creado por Leandro Veliz-2022
      </footer>
    </div>
  );
}

export default App;
