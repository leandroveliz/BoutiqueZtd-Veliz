import React,{useEffect,useState}from 'react';
import ItemList from "./itemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { baseDeDatos } from './config';

const ItemListContainer = () => {
    const [listaProductos,setListaProductos] = useState([]);
    const [cargando,setCargando] = useState(false);

    const {categoriaId} = useParams();
   

    useEffect(()=>{
        setCargando(true)
        
        const referenciaProductos = collection(baseDeDatos,"productos");
        const queryy = categoriaId ? query(referenciaProductos,where('categoria','==',categoriaId)) : referenciaProductos

        getDocs(queryy)
                .then(resp => {
                    const items = resp.docs.map((doc) => ({id: doc.id,...doc.data()}))
                    
                    setListaProductos(items)
                })
                .finally(()=>{
                    setCargando(false)
                })

    },[categoriaId]);        
        return(
            <div>
                {cargando  ? <div className="tamanioIcono">
                                <div className="iconoCargando">
                                    <div className="iconoCargando iconoCargando-a">
                                        </div></div></div> : ''}
                <ItemList listaProductos={listaProductos}/>
                <br />
            </div>
            
        );

}


export default ItemListContainer;