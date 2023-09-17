import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addCart = product => {
        const cartInCarrito = cart.findIndex(item => item.idproducto === product.idproducto)

        if (cartInCarrito >= 0){
            const newCart = structuredClone(cart)
            newCart[cartInCarrito].cantidad += 1
            return setCart(newCart)
        } 

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                cantidad: 1
            }
        ]))
    }

    const menosProduct = product => {

        if (product.cantidad >= 1){
            const newCart = structuredClone(cart)
            newCart[product.idproducto].cantidad -= 1
            return setCart(newCart)
        }
    }

    const removeCart = (product) => {
        // const cantidadInCarrito = cart.find(item => item.cantidad)
        // if (product.cantidad > 1){
        //     const newCart = structuredClone(cart)
        //     newCart[product].cantidad -= 1
        //     return setCart(newCart)
        // }
        return setCart(prevState => prevState.filter(item => item.idproducto !== product.idproducto))
    }

    const clearCart = () => {
        setCart([])
    }

    console.log(cart)

    return (
        <CarritoContext.Provider value={{cart, addCart, clearCart, removeCart, menosProduct}}>
            {children}
        </CarritoContext.Provider>
    )
}

export const useCarritoContext = () => {
    return useContext(CarritoContext)
}