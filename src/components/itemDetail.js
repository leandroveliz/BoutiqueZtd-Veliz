import React, { useState,useContext} from "react";
import { useNavigate, Link} from "react-router-dom";
import { CartContext } from "./cartContext";
import ItemCount from "./itemCount";
import Select from "./select";
import ImagenCar from "./carousel";

const optionsRem =[
    {value:'talle',text:'Talle'},
    {value:'xs', text:'XS'},
    {value:'s', text:'S'},
    {value:'m', text:'M'},
    {value:'l', text:'L'},
    {value:'xl', text:'XL'},
]
const optionsPan=[
    {value:'talle',text:'Talle'},
    {value:'32', text:'32'},
    {value:'34', text:'34'},
    {value:'36', text:'36'},
    {value:'38', text:'38'},
    {value:'40', text:'40'},
    {value:'42', text:'42'},
    {value:'44', text:'44'},
    {value:'46', text:'46'},
    {value:'48', text:'48'},
    {value:'50', text:'50'},
]
const optionsCalzados=[
    {value:'talle',text:'Talle'},
    {value:'34', text: '34'},
    {value:'35', text: '35'},
    {value:'36', text: '36'},
    {value:'37', text: '37'},
    {value:'38', text: '38'},
    {value:'39', text: '39'},
    {value:'40', text: '40'},
    {value:'41', text: '41'},
    {value:'42', text: '42'},
]
const optionsRopaInterior = [
    {value:'talle',text:'Talle'},
    {value:'85',text:'85'},
    {value:'90',text:'90'},
    {value:'95',text:'95'},
    {value:'100',text:'100'},
    {value:'105',text:'105'},
    {value:'110',text:'110'},
    {value:'115',text:'115'},
    {value:'120',text:'120'},
]
const ItemDetail = ({id,nombre,precio,imagen1,imagen2,descripcion,categoria,stock}) =>{
    
    const {cart,addItem, isInCart} = useContext(CartContext)

    const navigacion = useNavigate();

    const volverAlInicio = () =>{
        navigacion("/")
    }
    const volverAtras = () =>{
        navigacion(-1)
    }
    const [cantidad,setCantidad] = useState(0);

    
    const [talleRem,setTalleRem]  =  useState('Talle Remera')

    const [talleCal,setTalleCal] = useState('Talle Calzado')

    const [talleRopaInterior,setTalleRopaInterior] = useState('Talle RopaInterior')

    const [tallePan,setTallePan] = useState('Talle Pantalon')
    
    
    
    const agregarItemAlCarrito = (cantidad) => {
    
        const itemAgregado = {
            id,nombre,precio,descripcion,stock,cantidad,imagen1
        }
        
        addItem(itemAgregado)
        
    }
    
    const sumarItemAlCarrito= () =>{
            agregarItemAlCarrito(cantidad);
    }

    const eliminarCart=()=>{
        cart.pop()
    }
    


    if(categoria === 'ojotas'){
        return <div className="colorProd form">
                
                <div className="moverProducto">
                <ImagenCar imagen1={imagen1} imagen2={imagen2}/>
                </div>

                <h3>{nombre}</h3>
                <h5>${precio}</h5>
                <p>{descripcion}</p>
                
                { stock  === 0 && <p style={{color:'orange', fontWeight:'800'}}>¡Producto sin Stock!</p>}
                <>
                    
                    {
                    !isInCart(id) ?
                    <div>
                        <small>Stock Disponible: {stock}</small><br /><br />
                        <Select options={optionsCalzados} onSelect={setTalleCal}></Select><br /><br />
                        <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} agregarItemAlCarrito={sumarItemAlCarrito}/> 
                    </div>
                    :
                    <div>
                        <p>Talle: {talleCal}</p>
                        <Link to={`/detalle/${id}`} className="btn btn-info" onClick={eliminarCart} >Editar Cantidad</Link>
                        <br />
                        <Link to="/categoria/carrito" className="btn btn-success">Procesar Compra</Link>
                        <br />

                    </div>
                    
                    }
                </>  
                <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
                <br />
                <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
                <br /><br /><br />  
                </div>
    }
    if(categoria === 'zapatos'){
        return <div className="colorProd form">
                <div className="moverProducto">
                <ImagenCar imagen1={imagen1} imagen2={imagen2}/>
                </div>
                <h3>{nombre}</h3>
                <h5>${precio}</h5>
                <p>{descripcion}</p>
                
                <>
                    
                    {
                    !isInCart(id) ?
                    <div>
                        <small>Stock Disponible: {stock}</small><br /><br />
                        <Select options={optionsCalzados} onSelect={setTalleCal}></Select><br /><br />
                        <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} agregarItemAlCarrito={sumarItemAlCarrito}/> 
                    </div>
                    :
                    <div>
                        <p>Talle: {talleCal}</p>
                        <Link to={`/detalle/${id}`} className="btn btn-info" onClick={eliminarCart} >Editar Cantidad</Link>
                        <br />
                        <Link to="/categoria/carrito" className="btn btn-success">Procesar Compra</Link>
                        <br />
                    </div>
                    }
                </>
                <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
                <br />
                <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
                <br /><br /><br /> 
                </div>
    }
    if(categoria === 'zapatillas'){
        return <div className="colorProd form">
               <div className="moverProducto">
                <ImagenCar imagen1={imagen1} imagen2={imagen2}/>
                </div>
                <h3>{nombre}</h3>
                
                <h5>${precio}</h5>
                <p>{descripcion}</p>
                
                { stock  === 0 && <p style={{color:'orange', fontWeight:'800'}}>¡Producto sin Stock!</p>}
                <>
                {
                !isInCart(id) ?
                    <div>
                        <small>Stock Disponible: {stock}</small><br /><br />
                        <Select options={optionsCalzados} onSelect={setTalleCal}></Select><br /><br />
                        <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} agregarItemAlCarrito={sumarItemAlCarrito}/>
                    </div>
                    :
                    <div>
                        <p>Talle: {talleCal}</p>
                        <Link to={`/detalle/${id}`} className="btn btn-info" onClick={eliminarCart} >Editar Cantidad</Link>
                        <br />
                        <Link to="/categoria/carrito" className="btn btn-success">Procesar Compra</Link>
                        <br />
                    </div>
                }
                </>
                <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
                <br />
                <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
                <br /><br /><br /> 
                </div>
    }
    if(categoria === 'ropainterior'){
        return <div className="colorProd form">
               <div className="moverProducto">
                <ImagenCar imagen1={imagen1} imagen2={imagen2}/>
                </div>
                <h3>{nombre}</h3>
                <h5>${precio}</h5>
                <p>{descripcion}</p>
                
                { stock  === 0 && <p style={{color:'orange', fontWeight:'800'}}>¡Producto sin Stock!</p>}
                <>
                {
                    !isInCart(id) ?
                    <div>
                        <small>Stock Disponible: {stock}</small><br /><br />
                        <Select options={optionsRopaInterior} onSelect={setTalleRopaInterior}></Select><br /><br />
                        <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} agregarItemAlCarrito={sumarItemAlCarrito}/> 
                    </div>
                    :
                    <div>
                        <p>Talle: {talleRopaInterior}</p>
                        <Link to={`/detalle/${id}`} className="btn btn-info" onClick={eliminarCart} >Editar Cantidad</Link>
                        <br />
                        <Link to="/categoria/carrito" className="btn btn-success">Procesar Compra</Link>
                        <br />
                    </div>
                }
                </>
                <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
                <br />
                <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
                <br /><br /><br /> 
                </div>
    }
    if(categoria === 'pantalones'){
        return <div className="colorProd form">
                <div className="moverProducto">
                <ImagenCar imagen1={imagen1} imagen2={imagen2}/>
                </div>
                <h3>{nombre}</h3>
                <h5>${precio}</h5>
                <p>{descripcion}</p>
                
                { stock  === 0 && <p style={{color:'orange', fontWeight:'800'}}>¡Producto sin Stock!</p>}
                <>
                {
                    !isInCart(id) ?
                    <div>
                        <small>Stock Disponible: {stock}</small><br /><br />
                        <Select options={optionsPan} onSelect={setTallePan}></Select><br /><br />
                        <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} agregarItemAlCarrito={sumarItemAlCarrito}/> 
                    </div>
                    :
                    <div>
                        <p>Talle: {tallePan}</p>
                        <Link to={`/detalle/${id}`} className="btn btn-info" onClick={eliminarCart} >Editar Cantidad</Link>
                        <br />
                        <Link to="/categoria/carrito" className="btn btn-success">Procesar Compra</Link>
                        <br />
                    </div>
                }
                </>
                <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
                <br />
                <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
                <br /><br /><br /> 
                </div>
    }

    return(
            <><div className="moverProducto">
            <ImagenCar imagen1={imagen1} imagen2={imagen2}/>
            </div>
            <div className="colorProd form">
                <h3>{nombre}</h3>
                <h5>${precio}</h5>
                <p>{descripcion}</p>
                
                {stock === 0 && <p style={{ color: 'orange', fontWeight: '800' }}>¡Producto sin Stock!</p>}
                <>
                {
                    !isInCart(id) ?
                    <div>
                        <small>Stock Disponible: {stock}</small><br /><br />
                        <Select options={optionsRem} onSelect={setTalleRem}></Select><br /><br />
                        <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} agregarItemAlCarrito={sumarItemAlCarrito}/> 
                    </div>
                    :
                    <div>
                        <p>Talle: {talleRem}</p>
                        <Link to={`/detalle/${id}`} className="btn btn-info" onClick={eliminarCart} >Editar Cantidad</Link>
                        <br />
                        <Link to="/categoria/carrito" className="btn btn-success">Procesar Compra</Link>
                        <br />
                    </div>
                } 
                </>
                <button className="btn btn-secondary" onClick={volverAtras}>Volver atras</button>
                <br />
                <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al Inicio</button>
                <br /><br /><br />
            </div></>
    )
}

export default ItemDetail;