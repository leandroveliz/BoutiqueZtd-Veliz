import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { promesa } from "../mocks/productos";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
    const[detalleProducto,setDetalleProducto]= useState({})
    const[cargando,setCargando] = useState (false)

    const {itemId} = useParams();

     useEffect(()=>{
         setCargando(true)
         promesa
        .then((resp)=> setDetalleProducto(resp.find((item)=> item.id === Number(itemId))))
        .catch((error) => console.log(error))
        .finally(()=> setCargando(false))
         
     },[itemId])
    
    return(
        <div>

            {cargando  ? <p>Cargando...</p> : <ItemDetail {...detalleProducto}/> }
            
        </div>
    )
}

export default ItemDetailContainer;