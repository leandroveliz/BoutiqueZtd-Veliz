import React, {useState} from "react";
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";

const Item = ({nombre,precio, stock,imagen,id,descripcion}) =>{
    
    return(
            <div>

                <Card style={{ width: '16rem', margin: '12px' }}>
                    
                    <Card.Body class="colorCard">
                        
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                            Precio: ${precio}
                        </Card.Text>
                        <br />
                        <Link to={`/detalle/${id}`}><button className="btn btn-secondary" >Mas detalles</button></Link>
                    </Card.Body>
                 </Card>
                
            </div>
        
    );

    
    
}
export default Item;
