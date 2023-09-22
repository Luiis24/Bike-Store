
import logo from '../assets/img/logoNegro.png'
import '../assets/css/carrito.css'
import { CompraRealizada } from './CompraRealizada'
import { Formulariocarrito } from './Formulariocarrito'
import { useCarritoContext } from '../redux/carritoContext.jsx'
import { Link } from 'react-router-dom'
import basura from '../assets/img/basura.png'
import {useAuth} from '../redux/store'

export const Carrito = () => {
  const { user } = useAuth();
  const { cart, addCart, removeCart, carritoInfo, cantidadProductos, subtractCart } = useCarritoContext()
  const total = carritoInfo + 50000;
  
  return (
    <div>
      <div className="containerCarrito">
        <div className="logoNegroCarrito">
          <Link to="/home"><img src={logo} className='logo_'></img></Link>
        </div>

        <div className="tuCarrito">
          <h2>Tu carrito:</h2>
          <div className='sectionCarrito'>
          <div className="cardsCarrito">


          {cart[0] ? cart.map(product => (
            <div>
            <div className="carrito" id={product.idproducto}>
                <div className="imgBiciCarrito">
                    <Link to={`/detalles/${product.idproducto}`}>
                        <img src={product.imagen} className='bici' />
                    </Link>
                </div>
    
                <div className="infoCarrito">
                    <h3>{product.nombre}</h3>
                    <p>${vcar(product.precio)}</p>
                    <div className="contador">
                        <button onClick={() => subtractCart(product)}>-</button>
                        <h4>{product.cantidad}</h4>
                        <button onClick={() => addCart(product)}>+</button>
                    </div>
                </div>
                <div className="basuraContainer"><button className='basuraResponsive' onClick={() => removeCart(product)}><img src={basura} /></button></div>
    
              </div>
             </div>

          )) : <div className='carrito-vacio'>Carrito Vacio</div>}
          </div>

          <div className="montoTotalC">
          {cart[0] ? <div className="montoTotal">
              <h2>Resumen de la orden:</h2>
              <div className="sectionMontoC">
                <h3>Total productos:</h3>
                <p>{cantidadProductos}</p>
              </div>
              <div className="sectionMontoC">
                <h3>Subtotal:</h3>
                <p>${vcar(carritoInfo)}</p>
              </div>
              <div className="sectionMontoC">
                <h3>Envio:</h3>
                <p>$50.000</p>
              </div>

              <h3 className='totalC'>Total: ${vcar(total)}</h3>
              <button className="seguirCompra" onClick={() => {
                  
                  if (!user) {
                    alert('ingresa tu usuario o registrate')
                    return location.href = "/sesion"
                  } else {
                    document.getElementById("modal-formulario").style.top = "0"
                  }
                }}>Comprar</button>
            </div> : ''}</div>

          

          </div>
        </div>
      </div>
      <div className="fomularioCarritoN" id='formularioCarrito_'><Formulariocarrito /></div>
      <CompraRealizada />
    </div>
  )
}

function vcar(vcar) {
  return vcar.toLocaleString('es-ES');
}

