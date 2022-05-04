import {useState} from "react";
import { baseDeDatos } from "./../components/config"
import { collection,addDoc, Timestamp} from "firebase/firestore";
import { Link} from "react-router-dom";

const Contactos = () => {

    const [values,setValues]= useState({
        nombre:'',
        email:'',
        telefono:'',
        consulta:''
    });

    const [consulta,setConsulta] = useState(null) 

    const handleInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSumit = (e) =>{
        e.preventDefault()
        const consultaContacto = {
            cliente:{...values},
            fechahora: Timestamp.fromDate(new Date())
        }
        
        const referenciaConsulta = collection(baseDeDatos,'consulta')

        addDoc(referenciaConsulta, consultaContacto) 
            .then((doc) => {
                setConsulta(doc.id)  
            })
    }

    if(consulta){
        return <div>
                    <h2>Tu consulta se envio con exito</h2>
                    <hr />
                    <Link to="/contacto/contactos" className="btn btn-success">Volver al Inicio</Link>
        </div>

    }

    return (
        <div>
            <form className=" form" onSubmit={handleSumit}>
            <h3>Contacta con Nosotros</h3>
            <hr />
            <input className="form-control my-2" type={"text"} 
            placeholder="Nombre" value={values.nombre}
            name='nombre' onChange={handleInputChange}
            style={{width:'40%'}}/>
            <input className="form-control my-2" type={"email"}
            placeholder="Mail" value={values.email}
            name='email' onChange={handleInputChange}
            style={{width:'40%'}}/>
            <input className="form-control my-2" type={"tel"}
            placeholder="Telefono" value={values.telefono}
            name='telefono' onChange={handleInputChange}
            style={{width:'25%'}}/>
            <textarea className="form-control my-2" type={"text"}
            placeholder="Consulta" value={values.mensaje}
            name='consulta' onChange={handleInputChange}
            style={{width:'70%',height:'200px',cols:80,rows:10}}/>
            <button className="btn btn-primary" type="submit">Enviar</button>
            <br /><br /><br />
        </form>
        </div>
    )
}
export default Contactos;