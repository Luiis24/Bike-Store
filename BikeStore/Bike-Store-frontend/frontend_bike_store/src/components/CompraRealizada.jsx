import { Link } from 'react-router-dom'
import '../assets/css/compraRealizada.css'
import compra from '../assets/img/checkCompra.png'

export const CompraRealizada = () => {
  return (
    <div>
        <a href="/home">
        <div className="checkCompra" id="compra">
            <img src={compra}></img>
            <h2>Compra Realizada</h2>
        </div>
        </a>
    </div>
  )
}
