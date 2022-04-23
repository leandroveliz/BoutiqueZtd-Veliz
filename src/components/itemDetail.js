
import { doc,getDoc } from "firebase/firestore";
import React, { useState,useContext, useEffect} from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { CartContext } from "./cartContext";
import { baseDeDatos } from "./config";
import ItemCount from "./itemCount";
import Select from "./select";


const optionsRem =[
    {value:'talle',text:'Talle'},
    {value:'xs', text:'XS'},
    {value:'s', text:'S'},
    {value:'m', text:'M'},
    {value:'l', text:'L'},
    {value:'xl', text:'XL'},
    
    
]




const ItemDetail = ({id,nombre,precio,descripcion,categoria,stock}) =>{

    const {addItem, isInCart} = useContext(CartContext)
    const navigacion = useNavigate();

    //const [tamanio,setTamanio] = useState('')
    const {itemId} = useParams()
    const [imagen,setImagen] = useState('')
    /*useEffect(()=>{
        const referenciaImagen = doc(baseDeDatos,"productos",itemId)

        getDoc(referenciaImagen)
            .then(doc=>{
               
                setImagen({imagen:doc.imagen,...doc.data()})
            })
    })*/
    const volverAlInicio = () =>{
        navigacion("/")
    }
    const volverAtras = () =>{
        navigacion(-1)
    }
    const [cantidad,setCantidad] = useState(0);
    
    const [talle,setTalleRem]  =  useState('Talle')
    
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
            <img src={imagen}></img>
            <h3>{nombre}</h3>
            <h5>Precio: <br />
            ${precio}</h5>
            <p>{descripcion}</p>
            <small>Stock Disponible: {stock}</small><br /><br />
            
            { stock  === 0 && <p style={{color:'orange', fontWeight:'800'}}>¡Producto sin Stock!</p>}
            
            <>
            <Select options={optionsRem} onSelect={setTalleRem}></Select><br /><br />
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