import React, {useState} from "react";
import ItemCount from './itemCount';



const producto = {
    nombre: 'Remera Lisa',
    stock: '5',
    inicial:'1'
};
const Funcional = ({nombre,apellido}) => {
   
        return(
            <div class="tamanioProducto">
            <h2>{producto.nombre}</h2>
            <ItemCount nombre={producto.nombre}stock={producto.stock} inicial={producto.inicial}/>
            <h5>Stock disponible: {producto.stock}</h5>
            
            </div>
        )

}


export default Funcional;