import { computeStyles } from '@popperjs/core';
import React,{useEffect,useState}from 'react';
import ItemList from "./itemList";
import { promesa } from '../mocks/api';


const ItemListContainer = () => {
    const [listaProductos,setListaProductos] = useState([]);
    const [cargando,setCargando] = useState(false);

    useEffect(()=>{
        setCargando(true)
        promesa.then((resp)=> setListaProductos(resp))
        .catch((error) => console.log(error))
        .finally(()=> setCargando(false))
    },[]);        
        return(
            <div>
                {cargando  ? <p>Cargando...</p> : ''}
                <h3>Lista de Productos</h3> 
                <ItemList listaProductos={listaProductos}/>
                
            </div>
            
        );

}


export default ItemListContainer;