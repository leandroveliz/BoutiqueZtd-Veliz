import React,{useEffect,useState}from 'react';
import ItemList from "./itemList";
import { promesa } from '../mocks/productos';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [listaProductos,setListaProductos] = useState([]);
    const [cargando,setCargando] = useState(false);

    const {categoriaId} = useParams();
    console.log(categoriaId);

    useEffect(()=>{
        setCargando(true)
        promesa
        .then(  ( resp ) => {
            if( categoriaId ) {
                setListaProductos( resp.filter( (prod)=> prod.categoria === categoriaId ))
            }else{
                setListaProductos(resp)
            }
        })
        .catch((error) => console.log(error))
        .finally(()=> setCargando(false))
    },[categoriaId]);        
        return(
            <div>
                {cargando  ? <p>Cargando...</p> : ''}
                <ItemList listaProductos={listaProductos}/>
                
            </div>
            
        );

}


export default ItemListContainer;