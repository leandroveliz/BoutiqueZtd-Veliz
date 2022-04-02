const productos = [
    {
        nombre:'Havaianas Azul',
        id:'100',
        descripcion:'Ojotas Havaianas Lisa Azules',
        precio:4000,
        categoria:'ojotas',
        stock:10,
        
        
    },
    {
        nombre:'Havaianas Dorada',
        id:'101',
        descripcion:'Ojotas Havaianas Lisa Doradas',
        precio:4000,
        categoria:'ojotas',
        stock:7,
        
        
    },
    {
        nombre:'Havaianas Rosa-Dorada',
        id:'103',
        descripcion:'Ojotas Havaianas Lisa Rosas con Detalles en Dorado',
        precio:4000,
        categoria:'ojotas',
        stock:13,
        
        
    },
    {
        nombre:'Puma Rosa-Blanca',
        id:'104',
        descripcion:'Ojotas Puma Lisa Rosas con Detalles en Blanco',
        precio:6500,
        categoria:'ojotas',
        stock:11,
        
        
    },
    {
        nombre:'Adidas Aqua',
        id:'105',
        descripcion:'Ojotas Adidas color Aqua con Detalles en Blanco',
        precio:6200,
        categoria:'ojotas',
        stock:9,
        
        
    },
    {
        nombre:'Nike',
        id:'106',
        descripcion:'Ojotas Nike color Negro con Detalles en floreados',
        precio:6000,
        categoria:'ojotas',
        stock:9,
        
        
    },
    {
        nombre:'Remera Algodon',
        id:'200',
        descripcion:'Remera de algodon estampada',
        precio:2800,
        categoria:'remeras',
        stock:5,
        
        
    },
    {
        nombre:'Musculosa Estampada',
        id:'201',
        descripcion:'Musculosa de algodon estampada',
        precio:2200,
        categoria:'remeras',
        stock:10,
        
        
    },
    {
        nombre:'Top',
        id:'202',
        descripcion:'Top con bordados y lentejuelas',
        precio:2800,
        categoria:'remeras',
        stock:12,
        
        
    },
    {
        nombre:'Remeras Top',
        id:'203',
        descripcion:'remeras top con hombro descubiertos',
        precio:2200,
        categoria:'remeras',
        stock:18,
        
        
    },
    {
        nombre:'Blusa',
        id:'204',
        descripcion:'Blusa tejida en color blanco',
        precio:2800,
        categoria:'remeras',
        stock:8,
        
    },
    {
        nombre:'Body',
        id:'205',
        descripcion:'Body Minnie de encaje',
        precio:2200,
        categoria:'remeras',
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
