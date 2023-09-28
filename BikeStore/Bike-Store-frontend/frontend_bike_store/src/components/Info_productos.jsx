import axios from 'axios';
import '../assets/css/Info_productos.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../redux/carritoContext';
import { Paginador } from './Paginador';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Catalogo :

export const Info_productos = () => {
  const [products, setProducts] = useState([]);
  const [pagina, setPagina] = useState(1)
  const [porPagina, setPorPagina] = useState(8)

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(datos => {
        setProducts(datos.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const maximo = Math.ceil(products.length / porPagina);

// Carrito:

const {addCart} = useCarritoContext()

// Buscador :

  const[ search, setSearch] = useState("")

  const BASE = 'http://localhost:3000/products'
 
  const showData = async () => {
   const response = await fetch (BASE)
   const data = await response.json()
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

  const mensajeAgregarProducto = (product) => {
    if(product.stock < 1){
      toast.error('Producto agotado', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    } else {
    toast.success('producto Agregado', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }
  }
  
 if (!products) {
    return <div className='catalogo-vacio'>Catalogo Vacio</div>;
  }

  return (
    <div className='sectionCards'>
      <div className='busqueda'>
      <input value={search} onChange={searcher} type='tetx' placeholder='Buscar...' className='buscar'></input>
      </div>
      <div className='tarjetas-bicicletas'>
  {result.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((product) => (
    <>
    
    <div key={product.idproducto} className='tarjeta'>
            <Link to={`/detalles/${product.idproducto}`}>
              <img src={product.imagen} className='bici-foto' alt='' />
              <h3 className='marca-bici'>{product.marca}</h3>
              <h3 className='nombre-bici'>{product.nombre}</h3>
              <div className='precio-bici'>${precio(product.precio)}</div>
            </Link>
            <div className='agregarCarritoIP'>
              <button
                className='btn-carritoIP'
                onClick={() => {addCart(product);
                mensajeAgregarProducto(product)}}
              >
                Añadir Al Carrito
              </button>
            </div>
      </div>
      </>
  ))}
</div>
<Paginador pagina={pagina} setPagina={setPagina} maximo={maximo}/>
<ToastContainer />
    </div>
  );
};
function precio(precio) {
  return precio.toLocaleString('es-ES');
}