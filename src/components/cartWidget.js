import React, { useContext } from "react";
import bolsa from './../imagen/bag.svg'
import '../App.css'
import { CartContext } from "./cartContext";

const CartWidget = () =>{
    const {cantidadProductosAgregados}= useContext(CartContext)
    return(
    <div className="cart">
    <img src={bolsa} className="tamanioCarrito" alt="carrito"></img>
    <span className="numCarrito">{cantidadProductosAgregados()}</span>
    </div>
    );
    
}
  
export default CartWidget;

