

const ItemCounter = ({max, cantidad, setCantidad,onAdd}) =>{
    
    const clickSuma = () => {
        cantidad < max && setCantidad(cantidad+1)
            
    };
        
    const clickResta = () => {
        cantidad > 0 && setCantidad(cantidad-1)
    };

    
        
    return(
        <div>
        <button className={
            cantidad > 0 ? 
            "btn btn-outline-primary" : 
            "btn btn-outline-secondary"} 
            onClick={()=> clickResta()}
            disabled={cantidad === 0}>-</button>
        <span>{cantidad}</span>
        <button className={
            cantidad < max ? 
            "btn btn-primary" : "btn btn-secondary"} 
            onClick={()=> clickSuma()}
            disabled={cantidad === max}>+</button>

        <br /><br />
        <button onClick={onAdd} 
        className="btn btn-success"
        disabled={cantidad === 0}>Agregar al Carrito</button>
        <br /><br />
        
        </div>
        
    )
}

export default ItemCounter;