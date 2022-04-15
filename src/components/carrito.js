import { useContext } from "react";
import { CartContext } from "./cartContext";
import { BsFillTrashFill } from "react-icons/bs";
import {Link} from "react-router-dom"


const Carrito = () => {
    const { cart, totalCart, vaciarCart, eliminarProd } = useContext(CartContext)
    
    if(cart.length === 0){
        return <div>
        <h2> Resumen de Compra</h2>
        <hr />
        <h2>Tu carrito esta vacio</h2>
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
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <hs>Precio: ${item.precio * item.cantidad}</hs>
                        <button className="btn btn-danger" onClick={()=> eliminarProd(item.id)}><BsFillTrashFill /></button>
                    </div>
                ))
            }
            <h3>Total: ${totalCart()}</h3>
            <hr />
            <button className="btn btn-danger" onClick={vaciarCart}>Vaciar Carrito</button>
            <Link to="/terminarCompra" className="btn btn-success">Terminar Compra</Link>
        </div>
    )   

}

export default Carrito;