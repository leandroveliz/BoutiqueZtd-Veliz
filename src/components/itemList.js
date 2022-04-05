import React from 'react';
import  Item  from './item';


const ItemList = ({listaProductos}) =>{
    
    return(
            
        <div>  
        <div class="moverProducto"> 
            { listaProductos.map((item => <Item nombre={item.nombre} precio={item.precio} 
            id={item.id} imagen={item.imagen} descripcion={item.descripcion} stock={item.stock} 
            categoria={item.categoria} key={item.id}/>))}
        </div>
        </div>
    );
};


export default ItemList;