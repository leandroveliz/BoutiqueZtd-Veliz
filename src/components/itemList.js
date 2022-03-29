import React from 'react';
import  Item  from './item';


const productos = [
    {
        nombre:'Remera Algodon',
        id:1,
        descripcion:'Remera de algodon estampada',
        precio:2800,
        stock:15,
        
        
    },
    {
        nombre:'Musculosa Estampada',
        id:2,
        descripcion:'Musculosa de algodon estampada',
        precio:2200,
        stock:10,
        
        
    },
    {
        nombre:'Top',
        id:3,
        descripcion:'Top con bordados y lentejuelas',
        precio:2800,
        stock:15,
        
        
    },
    {
        nombre:'Remera Top',
        id:4,
        descripcion:'remera top con hombro descubiertos',
        precio:2200,
        stock:10,
        
        
    },
    {
        nombre:'Blusa',
        id:5,
        descripcion:'Blusa tejida en color blanco',
        precio:2800,
        stock:15,
        
    },
    {
        nombre:'Body',
        id:6,
        descripcion:'Body Minnie de encaje',
        precio:2200,
        stock:10,
       
    }
];

const ItemList = () =>{
        const promesa = new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        });
        promesa.then((productos)=>console.log(productos))
        
    return(
            
        <div> 
        <h3>Lista de Productos</h3>   
        <div className="moverProducto"> 
            { productos.map((item => <Item nombre={item.nombre} precio={item.precio} id={item.id} descripcion={item.descripcion} stock={item.stock}/>))}
        </div>
        </div>
    );
};

export default ItemList;