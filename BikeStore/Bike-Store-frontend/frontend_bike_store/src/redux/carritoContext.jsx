import { createContext, useContext, useState, useReducer, useEffect } from "react";

const CarritoContext = createContext();

const initialState = (() => {
    try {
        return JSON.parse(window.localStorage.getItem('cart')) || [];
    } catch (error) {
        console.error('Error al parsear el contenido de localStorage:', error);
        return [];
    }
})();

const updateLocaleStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

const carritoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART' :
            const product = action.payload;
            const cartInCarrito = state.findIndex(item => item.idproducto === product.idproducto);
            if (cartInCarrito >= 0 && state[cartInCarrito].cantidad < product.stock) {
                const newCart = [...state];
                newCart[cartInCarrito].cantidad += 1
                updateLocaleStorage(newCart)
                return newCart
            } else if(cartInCarrito >= 0 && state[cartInCarrito].cantidad >= product.stock || product.stock < 1){
                return state
            } else {
                const newCart = [...state, { ...product, cantidad: 1}]
                updateLocaleStorage(newCart)
                return newCart
            }

        case 'REMOVE_CART': 
            const productRemove = action.payload;
            const newCart = state.filter(item => item.idproducto !== productRemove.idproducto)
            updateLocaleStorage(newCart)
            return newCart

        case 'SUBSTRACT_CART': 
            const productSubstract = action.payload;
            const cartInCarritoS = state.findIndex(item => item.idproducto === productSubstract.idproducto)

            if (productSubstract.cantidad > 1){
                const newCart = [...state];
                newCart[cartInCarritoS].cantidad -= 1;
                updateLocaleStorage(newCart)
                return newCart
            } else {
                const newCart = state.filter(item => item.idproducto !== productSubstract.idproducto);
                updateLocaleStorage(newCart)
                return newCart
            }

        default: 
            return state
    }
}

export const CarritoProvider = ({children}) => {

    const [cart, dispatch] = useReducer(carritoReducer, initialState);
    const [carritoInfo, setCarritoInfo] = useState(() => {
        const carritoInfoProductos = localStorage.getItem('carritoInfo');
        return carritoInfoProductos ? JSON.parse(carritoInfoProductos) : 0;
      })

    const [cantidadProductos, setCantidad] = useState(() => {
        const carritoCantidadProductos = localStorage.getItem('cantidadProductos');
        return carritoCantidadProductos ? JSON.parse(carritoCantidadProductos) : 0;
      })

    const addCart = (product) => {
        dispatch({type: 'ADD_CART', payload: product})
        if (product.stock < 1 || product.stock <= product.cantidad){
            return
        } else{
            setCarritoInfo((current) => {return (Number(current) + Number(product.precio))})
            setCantidad((current) => {return (current += 1)})
        }
    }

    const subtractCart = (product) => {
        dispatch({type: 'SUBSTRACT_CART', payload: product})
        if (product.cantidad > 1){
            setCarritoInfo((current) => {return (Number(current) - Number(product.precio))})
            setCantidad((current) => {return (current -= 1)})
            return
        } else {
            setCarritoInfo((current) => {return (Number(current) - (Number(product.precio) * product.cantidad))})
            setCantidad((current) => {return (current -= product.cantidad)})
        }
    }

    const removeCart = (product) => {
        dispatch({type: 'REMOVE_CART', payload: product})
        setCarritoInfo((current) => {return (Number(current) - (Number(product.precio) * product.cantidad))})
        setCantidad((current) => {return (current -= product.cantidad)})
    }

    useEffect(() => {
        localStorage.setItem('cantidadProductos', JSON.stringify(cantidadProductos));
        localStorage.setItem('carritoInfo', JSON.stringify(carritoInfo));
      }, [cantidadProductos, carritoInfo])

    // console.log(cart)

    return (
        <CarritoContext.Provider value={{cart, addCart, removeCart, carritoInfo, cantidadProductos, subtractCart}}>
            {children}
        </CarritoContext.Provider>
    )
}

export const useCarritoContext = () => {
    return useContext(CarritoContext)
}