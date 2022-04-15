
import React, { useState,useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "./cartContext";
import ItemCount from "./itemCount";
//import Select from "./select";

/*const optionsRem =[
    {value:'talle',text:'Talle'},
    {value:'xs', text:'XS'},
    {value:'s', text:'S'},
    {value:'m', text:'M'},
    {value:'l', text:'L'},
    {value:'xl', text:'XL'},
    <Select options={optionsRem} onSelect={setTalleRem}></Select><br /><br />
]*/


const ItemDetail = ({id,nombre,precio,imagen,descripcion,categoria,stock}) =>{

    const {addItem, isInCart} = useContext(CartContext)
    const navigacion = useNavigate();


    const volverAlInicio = () =>{
        navigacion("/")
    }
    const volverAtras = () =>{
        navigacion(-1)
    }
    const [cantidad,setCantidad] = useState(0);
    //const [talle,setTalleRem]  =  useState('Talle')
    
    const onAdd = (cantidad) => {
        const productoAMostrar = {
            id,nombre,precio,descripcion,categoria,cantidad
        }
        cantidad > 0 && addItem(productoAMostrar)
    };
    const sumarAlCarrito= () =>{
        onAdd(cantidad);
    }

    return(
        <div>
            
            <h3>{nombre}</h3>
            <h5>Precio: <br />
            ${precio}</h5>
            <p>{descripcion}</p>
            <small>Stock Disponible: {stock}</small><br /><br />
            
            { stock  === 0 && <p style={{color:'orange', fontWeight:'800'}}>¡Producto sin Stock!</p>}
           
            <>
            
                {
                !isInCart(id) ?
                <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={sumarAlCarrito}/> :
                <Link to="/categoria/carrito" className="btn btn-success">Procesar Compra</Link>
                }
            </>
            
            
            <br /><br />   
            <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
            <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
            
        </div>
    )
}

export default ItemDetail;