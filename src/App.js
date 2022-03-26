import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Funcional from './components/itemListContainer'



const stock=10;
const initial=1;
const onAdd = (contador) => {
    console.log('Cantidad Agregada',contador)
};


function App() {
  return (
    <div className="App">
      <header >
        <Navbar />
      </header>
      <body class="color-body">

      <div>
      <Funcional stock={stock} initial={initial} onAdd={onAdd}/>
      </div>
      
      </body>
      <footer>
      Creado por Leandro Veliz-2022
      </footer>
    </div>
  );
}

export default App;
