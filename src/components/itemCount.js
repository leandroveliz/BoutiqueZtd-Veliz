

const ItemCounter = ({max, cantidad, setCantidad,onAdd}) =>{
    
    const clickSuma = () => {
        cantidad < max && setCantidad(cantidad+1)
            
    };
        
    const clickResta = () => {
        cantidad > 1 && setCantidad(cantidad-1)
    };

    
        
    return(
        <div>
        <button className="btn btn-outline-primary" onClick={()=> clickResta()}>-</button>
        <span>{cantidad}</span>
        <button className="btn btn-primary" onClick={()=> clickSuma()}>+</button>
        <br /><br />
        <button onClick={onAdd} className="btn btn-success">Agregar al Carrito</button>
        <br /><br />
        
        </div>
        
    )
}

export default ItemCounter;