
import logo from '../assets/img/logoNegro.png'
import '../assets/css/carrito.css'
import { Car } from './car'
import { CompraRealizada } from './CompraRealizada'
import { Formulariocarrito } from './Formulariocarrito'
import { useCarritoContext } from '../redux/carrito.jsx'
import { Link } from 'react-router-dom'

export const Carrito = () => {
  const { cart, addCart, removeCart, menosProduct } = useCarritoContext()
  
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
            <Car key={product.idproductos}
              addCart={() => addCart(product)}
              removeCart={() => removeCart(product)}
              menosProduct={() => menosProduct(product)}
              {...product} />
          )) : <div className='carrito-vacio'>Carrito Vacio</div>}
          </div>

          <div className="montoTotalC">
          {cart[0] ? <div className="montoTotal">
              <h2>Resumen de la orden:</h2>
              <div className="sectionMontoC">
                <h3>Total productos:</h3>
                <p>{cart.length}</p>
              </div>
              <div className="sectionMontoC">
                <h3>Subtotal:</h3>
                <p>$3.000.000</p>
              </div>
              <div className="sectionMontoC">
                <h3>Envio:</h3>
                <p>$50.000</p>
              </div>

              <h3 className='totalC'>Total: $3.050.000</h3>
              <button className="seguirCompra" onClick={() => {
                document.getElementById("formularioCarrito").style.display = "flex"
              }}>Comprar</button>
            </div> : ''}</div>

          

          </div>
        </div>

        {/* <div className="comprarCarrito">
              <button onClick={() => {
                document.getElementById("compra").style.display = "flex"
              }}>Comprar</button>
            </div> */}
      </div>
      <Formulariocarrito />
      <CompraRealizada />
    </div>
  )
}

