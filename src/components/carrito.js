import { useContext } from "react";
import { CartContext } from "./cartContext";
import { BsFillTrashFill } from "react-icons/bs";


const Carrito = () => {
    const { cart, totalCart, vaciarCart, eliminarProd } = useContext(CartContext)
    
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
        </div>
    )

}

export default Carrito;