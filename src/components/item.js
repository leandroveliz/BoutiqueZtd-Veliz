import React from "react";
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";



const Item = ({nombre,precio,imagen,id}) =>{
    
    return(
            <div>

                <Card style={{ borderRadius:'15px', margin: '12px'}}>
                    <Card.Body class="colorCard">
                        <Card.Img src={imagen}/>
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
