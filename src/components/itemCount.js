import { click } from "@testing-library/user-event/dist/click";
import React, {useState} from "react";

const ItemCount = ({stock, inicial}) => {
        
        const [cantidadElegida,setCantiadadElegida] = useState(inicial);
        
        
        const clickSuma = () => {
            if(cantidadElegida<stock){
                setCantiadadElegida(cantidadElegida+1)
            }else{
                setCantiadadElegida(cantidadElegida==stock)
            }
            
            
            
        }
        
        const clickResta = () => {
                setCantiadadElegida(cantidadElegida-1)
        }
        
        return(
            <div>
            <button onClick={clickResta}>-</button>
            <h2>{cantidadElegida}</h2>
            <button onClick={clickSuma}>+</button>
            <br />
            <button class="btn btn-secondary">Agregar al Carrito</button>
            </div>
        )
}
export default ItemCount;