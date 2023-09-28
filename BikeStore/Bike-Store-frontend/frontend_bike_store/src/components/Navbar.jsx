import logo from '../assets/img/image.png'
import carrito from '../assets/img/carrito.png'
import '../assets/css/navbar.css'
import toggle from '../assets/img/menu.png'
import { useAuth } from '../redux/store.jsx';
import { useAdmin } from '../redux/admin';
import { useCarritoContext } from '../redux/carritoContext';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const { user } = useAuth();
    const { admin } = useAdmin();
    const { cantidadProductos } = useCarritoContext();

  return (
	<>
    <header className='headerNavbar'>
        <div className="navbar">
            <Link to="/home" className='HomeNavbar'>
            <img src={logo} className="logo-navbar"></img></Link>

            <input type="checkbox" id="navbar-toggle"></input>
            <label htmlFor="navbar-toggle" className="navbar-toggle-icon"><img src={toggle}></img></label>

            {admin ? '' : <Link className="carritoImg" to='/carrito'><img src={carrito}></img></Link>}
            
            <ul className="list-navbar">
                <li className="Categorias"><a href="/categorias">Categorias</a></li>
                {user ? <li><a href="/compras" >Compras</a></li> : ''}
                {admin ? <><li><a href="/Agregar">Agregar</a></li> 
                <li><a href='/ventas'>Ventas</a></li>
                <li><a href='/UsuariosReg'>Usuarios</a></li></>
                : null}

                <li>{
                            user ? <>
                                       <a><img className="userLogin" src="./src/assets/img/usuarioLoggin.png" /></a>
                                       <ul><li className='loggout' onClick={() => {sessionStorage.clear(); location.href = '/home'}}><a>Salir</a></li></ul>
                                   </> 
                            : <a href="/sesion">Acceder</a>}</li>
            </ul>
        </div>
    </header>
    { admin ? '' : <p className='cantidadProductos'>{cantidadProductos}</p>}
	</>
  )
}
