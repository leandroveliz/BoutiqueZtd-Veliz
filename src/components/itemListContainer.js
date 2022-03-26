import React, {useState} from "react";


const Funcional = ({stock,initial,onAdd}) => {
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
            <div className="tamanioProducto">
                <h2>Producto</h2>
                <div>
                <button onClick={()=> clickResta()}>-</button>
                <h3>{contador}</h3>
                <button onClick={()=> clickSuma()}>+</button>
                </div>
                <div>
                <button onClick={()=> sumarAlCarrito()} className="btn btn-primary">Agregar al Carrito</button>
                </div>
                
            </div>
        )

}


export default Funcional;