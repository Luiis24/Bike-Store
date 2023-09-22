import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useFilters } from '../redux/filters';
import { FiltrosCategoria } from './FiltrosCategoria.jsx';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../redux/carritoContext';

export const Categorias = () => {
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

  const {filters} = useFilters()
  const {addCart} = useCarritoContext()

  const filterProducts = (products) => {
    return products.filter(product => {
      return (product.precio >= filters.minPrecio &&
        (filters.categoria === 'all' || 
        product.tipo === filters.categoria) &&
        (filters.marca === 'all' ||
        product.marca === filters.marca) &&
        (filters.talla === 'all' ||
        product.talla === filters.talla)
        )
    })
  }

  const filteredProducts = filterProducts(products);

  return (
    <div>
        <div className='sectionCards'>
        <FiltrosCategoria></FiltrosCategoria>
      <div className='tarjetas-bicicletas'>

        {filteredProducts[0] ? filteredProducts.map((product) => (
         
         <div key={product.idproducto} className='tarjeta'>
          <Link to={`/detalles/${product.idproducto}`}>
           <img src={product.imagen} className='bici-foto' alt="" />
           <h3 className='marca-bici'>{product.marca}</h3>
           <h3 className='nombre-bici'>{product.nombre}</h3>
           <div className='precio-bici'>${precio(product.precio)}</div>
           </Link>
           <div className="agregarCarritoIP">
                 <button className='btn-carritoIP' onClick={() => addCart(product)}>Añadir Al Carrito</button>
               </div>
         </div>
       
        )) : <div>No hay productos con esta categoria</div>}
    </div>
    </div>
    </div>
  )
}
function precio(precio) {
    return precio.toLocaleString('es-ES');
  }