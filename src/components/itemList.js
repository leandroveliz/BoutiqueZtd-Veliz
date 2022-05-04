import React from 'react';
import  Item  from './item';


const ItemList = ({listaProductos}) =>{
    
    return(
            
        <div>  
        <div class="moverProducto"> 
            { listaProductos.map((item => <Item key={item.id} {...item}/>))}
        </div>
        </div>
    );
};


export default ItemList;