import React  from 'react';
import './App.css';
import Menu from './components/navbar';
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contactos from './contacto/contactos';
import Carrito from './components/carrito';
import { CartProvider } from './components/cartContext';
import TerminarCompra from './components/terminarCompra';


function App() {

  
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <header className='colorHeader menuFijo'>
        <Menu />
      </header>
      <div>
      <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
          <Route path="/detalle/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/contactos" element={<Contactos />}/>
          <Route path="/categoria/carrito" element={<Carrito />}/>
          <Route path="/terminarCompra" element={<TerminarCompra />}/>
          <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      
      </div>
      <footer>
      Creado por Leandro Veliz-2022
      </footer>
      </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
