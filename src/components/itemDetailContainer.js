import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseDeDatos } from "./config";
import  {doc,getDoc}  from 'firebase/firestore'
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
    const[detalleProducto,setDetalleProducto]= useState(null)
    const[cargando,setCargando] = useState (false)

    const {itemId} = useParams();

     useEffect(()=>{
        setCargando(true)

        const referenciaItem = doc(baseDeDatos,"productos",itemId);
        getDoc(referenciaItem)
                .then(doc => {
                    setDetalleProducto({ id:doc.id , ...doc.data()})
                })
                .finally(  ()=>
                setCargando(false)
                )
     },[itemId])
    
    return(
        <div>

            {cargando  ? <div className="form">
                            <div className="tamanioIcono"> 
                                <div className="iconoCargando">
                                    <div className="iconoCargando iconoCargando-a">
                                        </div></div></div></div> : <ItemDetail {...detalleProducto}/> }
            
        </div>
    )
}

export default ItemDetailContainer;