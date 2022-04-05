const productos = [
    {
        nombre:'Havaianas Azul',
        id:'100',
        descripcion:'Ojotas Havaianas Lisa Azules',
        precio:4000,
        categoria:'ojotas',
        stock:10,
        imagen:"./ojotas-1.jpg",
    },
    {
        nombre:'Havaianas Dorada',
        id:'101',
        descripcion:'Ojotas Havaianas Lisa Doradas',
        precio:4000,
        categoria:'ojotas',
        stock:7,
        imagen:"./ojotas-2.jpg",
    },
    {
        nombre:'Havaianas Rosa-Dorada',
        id:'103',
        descripcion:'Ojotas Havaianas Lisa Rosas con Detalles en Dorado',
        precio:4000,
        categoria:'ojotas',
        stock:13,
        imagen:"./ojotas-3.jpg",
        
        
    },
    {
        nombre:'Puma Rosa-Blanca',
        id:'104',
        descripcion:'Ojotas Puma Lisa Rosas con Detalles en Blanco',
        precio:6500,
        categoria:'ojotas',
        stock:11,
        imagen:"./ojotas-4.jpg",
        
    },
    {
        nombre:'Adidas Aqua',
        id:'105',
        descripcion:'Ojotas Adidas color Aqua con Detalles en Blanco',
        precio:6200,
        categoria:'ojotas',
        stock:9,
        imagen:"./ojotas-5.jpg",
        
    },
    {
        nombre:'Nike',
        id:'106',
        descripcion:'Ojotas Nike color Negro con Detalles en floreados',
        precio:6000,
        categoria:'ojotas',
        stock:9,
        imagen:"./ojotas6-2.jpg",
        
        
    },
    {
        nombre:'Remera Algodon',
        id:'200',
        descripcion:'Remera de algodon estampada',
        precio:2800,
        categoria:'remeras',
        stock:5,
        imagen:"./remera-1-2.jpg",
        
    },
    {
        nombre:'Musculosa Estampada',
        id:'201',
        descripcion:'Musculosa de algodon estampada',
        precio:2200,
        categoria:'remeras',
        stock:10,
        imagen:"./remera-2-2.jpg",    
        
    },
    {
        nombre:'Top',
        id:'202',
        descripcion:'Top con bordados y lentejuelas',
        precio:2800,
        categoria:'remeras',
        stock:12,
        imagen:"./remera-3-1.jpg",
        
    },
    {
        nombre:'Remeras Top',
        id:'203',
        descripcion:'remeras top con hombro descubiertos',
        precio:2200,
        categoria:'remeras',
        stock:18,
        imagen:"./remera-4-1.jpg",
        
    },
    {
        nombre:'Blusa',
        id:'204',
        descripcion:'Blusa tejida en color blanco',
        precio:2800,
        categoria:'remeras',
        stock:8,
        imagen:"./REMERA-5.jpg",
    },
    {
        nombre:'Body',
        id:'205',
        descripcion:'Body Minnie de encaje',
        precio:2200,
        categoria:'remeras',
        stock:6,
        imagen:"./remera-6.jpg",
    },
    {
        nombre:'Conjunto Bella',
        id:'300',
        descripcion:'Conjunto de Ropa interior en color Blanco',
        precio:2000,
        categoria:'ropainterior',
        stock:8,
        imagen:"./ropainterior1.jpg",
    },
    {
        nombre:'Conjunto Camelia',
        id:'301',
        descripcion:'Conjunto de Ropa interior sin taza color Beige',
        precio:2000,
        categoria:'ropainterior',
        stock:5,
        imagen:"./ropainterior2.jpg",
    },
    {
        nombre:'Conjunto Renata',
        id:'302',
        descripcion:'Conjunto de Ropa interior sin taza color Negro',
        precio:2200,
        categoria:'ropainterior',
        stock:7,
        imagen:"./ropainterior3.jpg",
        
    },
    {
        nombre:'Conjunto Sofia',
        id:'303',
        descripcion:'Conjunto de Ropa interior color Negro con detalles en Gris',
        precio:2100,
        categoria:'ropainterior',
        stock:12,
        imagen:"./ropainterior4.jpg",
        
    },
    {
        nombre:'Conjunto Mora',
        id:'304',
        descripcion:'Conjunto de Ropa interior sin taza color Negro',
        precio:2100,
        categoria:'ropainterior',
        stock:12,
        imagen:"./ropainterior5.jpg",
    },
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
