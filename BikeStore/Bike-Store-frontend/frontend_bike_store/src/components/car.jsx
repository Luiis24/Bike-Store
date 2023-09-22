import axios from 'axios';
import basura from '../assets/img/basura.png'
import { Link } from 'react-router-dom'
import '../assets/css/carrito.css';

export const Car = ({imagen, idproductos, nombre, precio, cantidad, addCart, removeCart, menosProduct}) => {
    // const [product, setProducts] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:3000/products')
//       .then(datos => {
//         setProducts(datos.data);
//       })
//       .catch(error => {
//         console.error('Error al obtener los datos:', error);
//       });
//   }, []);
//     if (!product) {
//         return <div className='carrito-vacio'>Carrito Vacio</div>;
//       }
    // const [contador, setContador] = useState(1)

    return (
        <div>
        <div className="carrito" id={idproductos}>
            <div className="imgBiciCarrito">
                <Link to="/bicicleta">
                    <img src={imagen} className='bici' />
                </Link>
            </div>

            <div className="infoCarrito">
                <h3>{nombre}</h3>
                <p>${valor(precio)}</p>
                <div className="contador">
                    <button onClick={menosProduct}>-</button>
                    <h4>{cantidad}</h4>
                    <button onClick={addCart}>+</button>
                </div>



            </div>
            <div className="basuraContainer"><button className='basuraResponsive' onClick={removeCart}><img src={basura} /></button></div>

        </div>
    </div>
    )
}

function valor(valor) {
    return valor.toLocaleString('es-ES');
  }
