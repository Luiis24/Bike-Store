import axios from 'axios';
import '../assets/css/Info_productos.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../redux/carrito';

// Catalogo :

export const Info_productos = () => {
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

// Carrito:

const {cart, addCart} = useCarritoContext()

// Buscador :

  const[ search, setSearch] = useState("")

  const BASE = 'http://localhost:3000/products'
 
  const showData = async () => {
   const response = await fetch (BASE)
   const data = await response.json()
   console.log(data)
  }


 const searcher = (e) =>{
   setSearch (e.target.value)
   console.log(e.target.value)
 }
 
 let result = []
 if(!search)
 {
     result = products
 }
 else{
  result = products.filter((dato) =>
   dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
   )
 }
 
  useEffect ( () => {
   showData()
  }, [])
  
 if (!products) {
    return <div className='catalogo-vacio'>Catalgo Vacio</div>;
  }

  return (
    <div className='sectionCards'>
      <div className='busqueda'>
      <input value={search} onChange={searcher} type='tetx' placeholder='Buscar...' className='buscar'></input>
      </div>
      <div className='tarjetas-bicicletas'>
  {result.map((product, index) => (
    <>
    
      <div key={product.idproducto} id={product.idproducto} className='tarjeta'>
      <Link to={`/bicicleta/${index}`} key={index}>
        <img src={product.imagen} className='bici-foto' alt="" />
        <h3 className='marca-bici'>{product.marca}</h3>
        <h3 className='nombre-bici'>{product.nombre}</h3>
        <div className='precio-bici'>${precio(product.precio)}</div>
        </Link>
        <div className="agregarCarritoIP">
              <button className='btn-carritoIP' onClick={() => addCart(product)}>Añadir Al Carrito</button>
            </div>
      </div>
      </>
  ))}
</div>
    </div>
  );
};
function precio(precio) {
  return precio.toLocaleString('es-ES');
}