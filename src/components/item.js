import React, {useState} from "react";
import { Card } from "react-bootstrap"

const Item = ({nombre,precio, stock}) =>{
    const initial=1;
    const onAdd = (contador) => {
        console.log('Cantidad Agregada',contador)
    };
    const [contador,setContador] = useState(initial);
        
        const clickSuma = () => {
            if(contador === stock){
                return;
            }
            
                setContador(contador+1)
            
        };
        
        const clickResta = () => {
            if(contador === initial){
                return;
            }
            setContador(contador-1)
            
        };
        const sumarAlCarrito= () =>{
            onAdd(contador);
        }
        
    return(
            <div>
               
                <Card style={{ width: '16rem', margin: '12px' }}>
                    <Card.Body className="colorCard">
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                            Precio: ${precio}
                        </Card.Text>
                        <div className="moverProducto">
                        <button className="btn btn-light btn-sm" onClick={()=> clickResta()}>-</button>
                        <h3>{contador}</h3>
                        <button className="btn btn-light btn-sm" onClick={()=> clickSuma()}>+</button>
                        </div>
                        <br />
                        <button  className="btn btn-secondary" >Mas detalles</button>
                        <br />
                        <br />
                        <button onClick={()=> sumarAlCarrito()} className="btn btn-primary">Agregar al Carrito</button>
                    </Card.Body>
                 </Card>
                
            </div>
        
    );

    
    
}
export default Item;
