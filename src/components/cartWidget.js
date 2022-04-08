import React, { useContext } from "react";
import carrito from '../carrito1.svg'
import '../App.css'
import { CartContext } from "./cartContext";

const CartWidget = () =>{
    const {cantidadProductosAgregados}= useContext(CartContext)
    return(
    <div>
    <img src={carrito} className="tamanioCarrito" alt="carrito"></img>
    <span className="numCarrito">({cantidadProductosAgregados()})</span>
    </div>
    );
    
}
  
export default CartWidget;

