import {createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider  =  ({children})  =>{
    
    const [cart,setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart,item])
    }
    
    const isInCart = (id) =>{
        return cart.some(prod =>prod.id === id)
    }

    const cantidadProductosAgregados = () =>{
        return cart.reduce((acc,prod) => acc + prod.cantidad,0 )
    }
    
    const totalCart = ( ) =>{
        return cart.reduce((acc, prod) => acc += prod.precio *  prod.cantidad,0)
    }
    
    
    
    const tresCuotas = parseFloat(totalCart() / 3).toFixed(2);
    

    const vaciarCart = () =>{
        setCart([])
    }

    const eliminarProd = (id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    return  (
        <CartContext.Provider value={{
            cart,
            addItem,
            isInCart,
            cantidadProductosAgregados,
            totalCart,
            vaciarCart,
            eliminarProd,
            tresCuotas
            }}>

            {children}
        </CartContext.Provider>

    )

}
