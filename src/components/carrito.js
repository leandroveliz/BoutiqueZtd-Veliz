import React,{ useContext} from "react";
import { CartContext } from "./cartContext";
import { BsFillTrashFill } from "react-icons/bs";
import {Link} from "react-router-dom"

const Carrito = () => {
    
    const { cart, totalCart,vaciarCart, eliminarProd,tresCuotas} = useContext(CartContext)
    
    if(cart.length === 0){
        return <div>
        <h2> Resumen de Compra</h2>
        <hr />
        <h2>Tu carrito esta vacio</h2>
        <br />
        <br />
        <br />
        <br />
        <h5>Vuelve al inicio para comprar</h5>
        <hr />
        <Link to={"/"} className="btn btn-primary">Volver al Inicio</Link>
        </div>
    }
    
    return(
        <div>
            <h2> Resumen de Compra</h2>
            <hr />
            <div>
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <img src={item.imagen1} className="tamanioImagen" style={{borderRadius:'15px'}}/>
                        <h4>{item.nombre}</h4>
                        <h6>Precio Unitario: ${item.precio}</h6>
                        <span>Cantidad: {item.cantidad}</span>
                        
                        <br /><br />
                        <button className="btn btn-danger" onClick={()=> eliminarProd(item.id)}><BsFillTrashFill /></button>
                        <br /><br />
                    </div>
                ))
            }
            </div>
            <br /><br />
            <h3>Total: ${totalCart()}</h3>
            <h4>3 Cuotas: $ {tresCuotas}</h4>
            <br /><br />
            <hr />
            <button className="btn btn-danger" onClick={vaciarCart}>Vaciar Carrito</button>
            <Link to="/terminarCompra" className="btn btn-success">Terminar Compra</Link>
            <br /><br /><br />
            
        </div>
    )   

}

export default Carrito;