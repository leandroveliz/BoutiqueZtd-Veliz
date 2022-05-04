import React from "react";
import { Card} from "react-bootstrap"
import { Link } from "react-router-dom";
import ImagenCar from "./carousel";

const Item = ({nombre,precio,imagen1,imagen2,id}) =>{
         
    return(
            <div>
                <div>
                <Card style={{ width:'350px',height:'430px',borderRadius:'15px', margin: '35px'}}>
                <ImagenCar imagen1={imagen1} imagen2={imagen2}/>
                    <Card.Body class="colorCard">
                        <Card.Title className="colorNombre">{nombre}</Card.Title>
                        <Card.Text>
                           ${precio}<br />
                        </Card.Text>
                        <br />
                        <Link to={`/detalle/${id}`}><button className="btn btn-secondary" >Mas detalles</button></Link>
                    </Card.Body>
                 </Card>
                 </div>
                 <br /><br />
            </div>
            
        
    );

    
    
}
export default Item;
