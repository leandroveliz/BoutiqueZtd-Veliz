import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import ClassComponent from './itemListContainer';


const persona = {
  nombre: 'Leandro',
  apellido: 'Veliz'
}

function App() {
  return (
    <div className="App">
      <header >
        <Navbar />
      </header>
      <body>
      <ClassComponent nombre={persona.nombre} apellido={persona.apellido}/>
      </body>
      <footer>
      Creado por Leandro Veliz-2022
      </footer>
    </div>
  );
}

export default App;
