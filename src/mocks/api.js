const productos = [
    {
        nombre:'Remera Algodon',
        id:'1',
        descripcion:'Remera de algodon estampada',
        precio:2800,
        categoria:'Remera',
        stock:15,
        
        
    },
    {
        nombre:'Musculosa Estampada',
        id:'2',
        descripcion:'Musculosa de algodon estampada',
        precio:2200,
        categoria:'Remera',
        stock:10,
        
        
    },
    {
        nombre:'Top',
        id:'3',
        descripcion:'Top con bordados y lentejuelas',
        precio:2800,
        categoria:'Remera',
        stock:12,
        
        
    },
    {
        nombre:'Remera Top',
        id:'4',
        descripcion:'remera top con hombro descubiertos',
        precio:2200,
        categoria:'Remera',
        stock:18,
        
        
    },
    {
        nombre:'Blusa',
        id:'5',
        descripcion:'Blusa tejida en color blanco',
        precio:2800,
        categoria:'Remera',
        stock:8,
        
    },
    {
        nombre:'Body',
        id:'6',
        descripcion:'Body Minnie de encaje',
        precio:2200,
        categoria:'Remera',
        stock:6,
       
    }
];
export const promesa = new Promise ((resolve,reject)=>{
    let condicion = true;
    if(condicion){
    setTimeout(() => {
        resolve(productos)
    }, 2000);
}else{
    resolve('No se cargan los detalles')
}
});