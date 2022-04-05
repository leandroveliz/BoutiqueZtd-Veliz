import { useState } from "react";

const ItemCounter = ({id,nombre,precio,descripcion,categoria,max}) =>{
    
    const initial=1;
    const onAdd = (cantidad) => {
        const productoAMostrar = {
            id,nombre,precio,descripcion,categoria,cantidad
        } 
        console.log('Cantidad Agregada',productoAMostrar)
    };
    const [cantidad,setcantidad] = useState(initial);
    
    const clickSuma = () => {
            console.log(cantidad)
            if(cantidad === max){
                return;
                
            }
            
            setcantidad(cantidad+1)
            
    };
        
    const clickResta = () => {
            if(cantidad === initial){
                return;
            }
            setcantidad(cantidad-1)
            
    };
    const sumarAlCarrito= () =>{
            onAdd(cantidad);
    }
        
    return(
        <div>
        <button className="btn btn-outline-primary" onClick={()=> clickResta()}>-</button>
        <span>{cantidad}</span>
        <button className="btn btn-primary" onClick={()=> clickSuma()}>+</button>
        <br /><br />
        <button onClick={()=> sumarAlCarrito()} className="btn btn-success">Agregar al Carrito</button>
        <br /><br />
        </div>
        
    )
}

export default ItemCounter;