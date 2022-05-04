import { useContext, useState } from "react";
import { CartContext } from "./cartContext";
import { baseDeDatos } from "./config"
import { collection,addDoc, Timestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { Link, Navigate } from "react-router-dom";


const TerminarCompra = () => {
    
    const {cart,totalCart,vaciarCart} = useContext(CartContext);

    const [ordenId,setOrdenId] = useState(null)

    const [values,setValues]= useState({
        nombre:'',
        email:'',
        telefono:'',
        direccion:''
    });
    
    const handleInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSumit = (e) =>{
        e.preventDefault()
        const orden = {
            items:cart,
            total: totalCart(),
            cliente:{...values
            },
            fechahora: Timestamp.fromDate(new Date())
        }
        
        const referenciaOrden = collection(baseDeDatos,'ordenes')

        cart.forEach((item) => {
            const referenciaDoc = doc(baseDeDatos,'productos', item.id);

            getDoc(referenciaDoc)
                .then((doc)=>{
                    if(doc.data().stock >= item.cantidad ){
                        updateDoc(referenciaDoc,{
                            stock: doc.data().stock-item.cantidad
                        })
                    }else{
                        alert('No hay stock de este producto')
                    }
                    
                })
            
        })

        addDoc(referenciaOrden, orden) 
            .then((doc) => {
                setOrdenId(doc.id)
                vaciarCart()
                
            })
    } 

    if(ordenId){
        return <div>
                    <h2>Tu compra se concreto con exito!</h2>
                    <hr />
                    <h4>Tu referencia de orden de compra: {ordenId}</h4>
                    <Link to="/" className="btn btn-success">Volver al Inicio</Link>
        </div>

    }

    if(cart.length === 0){
        return <Navigate to="/" />
    }
    return(
    <div>
        <h2>Mi compra</h2>
        <hr />
        <form onSubmit={handleSumit} className="form">
            <input className="form-control my-2" type={"text"} 
            placeholder="Nombre" value={values.nombre}
            name='nombre' onChange={handleInputChange}/>
            <input className="form-control my-2" type={"email"}
            placeholder="Mail" value={values.email}
            name='email' onChange={handleInputChange}/>
            <input className="form-control my-2" type={"tel"}
            placeholder="Telefono" value={values.telefono}
            name='telefono' onChange={handleInputChange}/>
            <input className="form-control my-2" type={"tel"}
            placeholder="Direccion" value={values.direccion}
            name='direccion' onChange={handleInputChange}/>
            <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
    </div>
    )
}

export default TerminarCompra;