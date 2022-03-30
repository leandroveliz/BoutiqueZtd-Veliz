import React from "react";

const ItemDetail = ({detalleProducto}) =>{
    const{nombre,precio} = detalleProducto
    return(
        <div>
            <h6>Detalles del Producto : <br /> {nombre}</h6>
            <p className="h6">{precio}</p>
        </div>
    )
}

export default ItemDetail;