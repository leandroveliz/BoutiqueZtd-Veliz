import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Funcional from './components/itemListContainer'

function App() {
  return (
    <div className="App">
      <header >
        <Navbar />
      </header>
      <body class="color-body">

      <div>
      <Funcional />
      </div>
      
      </body>
      <footer>
      Creado por Leandro Veliz-2022
      </footer>
    </div>
  );
}

export default App;
