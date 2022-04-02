import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const ItemDetail = ({id,nombre,precio,imagen,descripcion,categoria,stock}) =>{
    const navigacion = useNavigate();

    const volverAlInicio = () =>{
        navigacion("/")
    }
    const volverAtras = () =>{
        navigacion(-1)
    }
    const initial=1;
    const onAdd = (contador) => {
        console.log('Cantidad Agregada',contador)
    };
    const [contador,setContador] = useState(initial);
        
        const clickSuma = () => {
            if(contador === stock){
                return;
            }
            
                setContador(contador+1)
            
        };
        
        const clickResta = () => {
            if(contador === initial){
                return;
            }
            setContador(contador-1)
            
        };
        const sumarAlCarrito= () =>{
            onAdd(contador);
        }
        
   
    return(
        <div>
            <h4>{nombre}</h4>
            <h6>Precio: <br />
            {precio}</h6>
            <p>{descripcion}</p>
            <small>Stock Disponible: {stock}</small><br /><br />
            <div className="moverProducto">
                    <button className="btn btn-light btn-sm" onClick={()=> clickResta()}>-</button>
                    <h3>{contador}</h3>
                    <button className="btn btn-light btn-sm" onClick={()=> clickSuma()}>+</button>
            </div>
            <br />
            <button onClick={()=> sumarAlCarrito()} className="btn btn-primary">Agregar al Carrito</button>
            <br /><br />
            <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
            <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
        </div>
    )
}

export default ItemDetail;