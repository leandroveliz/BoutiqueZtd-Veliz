import React from "react";
import carrito from '../carrito1.svg'
import '../App.css'

const CartWidget = ({}) =>{
    return(
    <img src={carrito} className="tamanioCarrito" alt="carrito"/>
    );
}
  
export default CartWidget;

