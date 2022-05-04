import { useState } from "react"

const ItemCounterCarrito = ({max,cantidadAct}) =>{
    
    
    const [cantidad,setCantidad]=useState(cantidadAct)

    const clickSuma =()=>{
        cantidad<max && setCantidad(cantidad+1)
        
    }
    const clickResta = () =>{
        cantidad > 1 && setCantidad(cantidad-1)
        
    }
    
    return(
        <div>
        <small>Stock Disponible: {max}</small><br />
        <button className={
            cantidad > 0 ? 
            "btn btn-outline-primary" : 
            "btn btn-outline-secondary"}
            onClick={clickResta}
            disabled={cantidad === 0}>-</button>
        <span>{cantidad}</span>
        <button className={
            cantidad < max ? 
            "btn btn-primary" : "btn btn-secondary"} 
            disabled={cantidad === max}
            onClick={clickSuma}>+</button>
            <br />
            
            <br />
            
        </div>
        
            
    )
}

export default ItemCounterCarrito;