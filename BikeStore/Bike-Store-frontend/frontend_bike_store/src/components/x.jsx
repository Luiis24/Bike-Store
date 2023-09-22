// import { useState } from 'react'
// import basura from '../assets/img/basura.png'
// import bici from '../assets/img/15902950_1.jpg'
// import { Link } from 'react-router-dom'

// export const Car = () => {

//     const [contador, setContador] = useState(1)
//     return (
//         <div>
//             <div className="carrito">


//                 <div className="imgBiciCarrito">
//                     <Link to="/bicicleta">
//                         <img src={bici} className='bici' />
//                     </Link>
//                 </div>

//                 <div className="infoCarrito">
//                     <h3>TREK URBAN DUAL SPORT 2 2021</h3>
//                     <p>$2.190.000</p>
//                     <div className="contador">
//                         <button onClick={() => { if (contador > 1) { setContador(contador - 1) } }}>-</button>
//                         <h4>{contador}</h4>
//                         <button onClick={() => { setContador(contador + 1) }}>+</button>
//                     </div>



//                 </div>
//                 <div className="basuraContainer"><button className='basuraResponsive'><img src={basura} /></button></div>

//             </div>
//         </div>
//     )
// }
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import basura from '../assets/img/basura.png'
import { Link } from 'react-router-dom'
import '../assets/css/carrito.css';

export const Car = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3000/products')
        .then(datos => {
          setProducts(datos.data);
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    }, []);
    const [contador, setContador] = useState(1)
    return (
        <div>
            <div className="carrito">
            {products.map(product => (    
              <div>
              <img src={product.imagen} className='bici' />
              </div>
            ))}
                <div className="imgBiciCarrito">
                    <Link to="/bicicleta">
                        <img src={product.imagen} className='bici' />
                    </Link>
                </div>

                <div className="infoCarrito">
                  
                    <h3>{product.nombre}</h3>
                    
                    <p>${precio(product.precio)}</p>
                  
                    <div className="contador">

                        <button onClick={() => { if (contador > 1) { setContador(contador - 1) } }}>-</button>

                        <h4>{contador}</h4>

                        <button onClick={() => { setContador(contador + 1) }}>+</button>
                        
                    </div>
                    
                </div>
              
                <div className="basuraContainer"><button className='basuraResponsive'><img src={basura} /></button></div>
               
            </div>
        </div>
    )
}