import React from "react";
import { useNavigate } from "react-router-dom";
import ItemCounter from "./itemCounter";


const ItemDetail = ({id,nombre,precio,imagen,descripcion,categoria,stock}) =>{
    const navigacion = useNavigate();

    const volverAlInicio = () =>{
        navigacion("/")
    }
    const volverAtras = () =>{
        navigacion(-1)
    }
    
    
   
    return(
        <div>
            
            <h3>{nombre}</h3>
            <h5>Precio: <br />
            ${precio}</h5>
            <p>{descripcion}</p>
            <small>Stock Disponible: {stock}</small><br /><br />
            <div className="moverProducto">
                    <ItemCounter max={stock} id={id} nombre={nombre} descripcion={descripcion} categoria={categoria} precio={precio}/>
            </div>
            <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
            <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
        </div>
    )
}

export default ItemDetail;