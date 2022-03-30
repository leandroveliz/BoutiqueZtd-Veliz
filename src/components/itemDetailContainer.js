import React, { useEffect, useState } from "react";
import { promesa } from "../mocks/api";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
    const[detalleProducto,setDetalleProducto]= useState({})
    const[cargando,setCargando] = useState (false)
     useEffect(()=>{
         setCargando(true)
         promesa
        .then((resp)=> setDetalleProducto(resp.find((item)=> item.id === '1')))
        .catch((error) => console.log(error))
        .finally(()=> setCargando(false))
         
     },[])
     console.log(detalleProducto)
    return(
        <div>

            {cargando  ? <p>Cargando...</p> : <ItemDetail detalleProducto={detalleProducto}/> }
            
        </div>
    )
}

export default ItemDetailContainer;