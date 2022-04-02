import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/navbar';
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contactos from './contacto/contactos';
import CartWidget from './components/cartWidget';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header >
        <Menu />
      </header>
      <div>
      <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
          <Route path="/detalle/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/contactos" element={<Contactos />}/>
          <Route path="/carrito" element={<CartWidget />}/>
          <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      
      </div>
      <footer>
      Creado por Leandro Veliz-2022
      </footer>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
