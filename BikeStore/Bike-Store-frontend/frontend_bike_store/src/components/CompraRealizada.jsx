import { Link } from 'react-router-dom'
import '../assets/css/compra.css'
import compra from '../assets/img/checkCompra.png'

export const CompraRealizada = () => {
  return (
    <div>
        <Link to="/home">
        <div className="checkCompra" id="compra">
            <img src={compra}></img>
            <h2>Compra Realizada</h2>
        </div>
        </Link>
    </div>
  )
}
