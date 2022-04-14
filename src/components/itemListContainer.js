import React,{useEffect,useState}from 'react';
import ItemList from "./itemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { baseDeDatos } from './config';

const ItemListContainer = () => {
    const [listaProductos,setListaProductos] = useState([]);
    const [cargando,setCargando] = useState(false);

    const {categoriaId} = useParams();
    console.log(categoriaId);

    useEffect(()=>{
        setCargando(true)
        
        const referenciaProductos = collection(baseDeDatos,"productos");
        const queryy = categoriaId ? query(referenciaProductos,where('categoria','==',categoriaId)) : referenciaProductos

        getDocs(queryy)
                .then(resp => {
                    const items = resp.docs.map((doc) => ({id: doc.id,...doc.data()}))
                    console.log(items)
                    setListaProductos(items)
                })
                .finally(()=>{
                    setCargando(false)
                })

    },[categoriaId]);        
        return(
            <div>
                {cargando  ? <p>Cargando...</p> : ''}
                <ItemList listaProductos={listaProductos}/>
                
            </div>
            
        );

}


export default ItemListContainer;