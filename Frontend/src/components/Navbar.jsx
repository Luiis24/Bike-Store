import logo from '../assets/img/image.png'
import carrito from '../assets/img/carrito.png'
import '../assets/css/navbar.css'
import toggle from '../assets/img/menu.png'

export const Navbar = () => {

  return (
	<>
    <header>
        <div className="navbar">
            <img src={logo} className="logo"></img>

            <input type="checkbox" id="navbar-toggle"></input>
            <label for="navbar-toggle" className="navbar-toggle-icon"><img src={toggle}></img></label>

            <a className="carrito"><img src={carrito}></img></a>
            
            <ul className="list-navbar">
                <li className="Categorias"><a href="">Categorias </a>
                    <ul>
                    <li><a href="#">Ruta</a></li>
					<li><a href="#">BMX</a></li>
					<li><a href="#">Todo terreno</a></li>
					<li><a href="#">Estandar</a></li>
					<li><a href="#">Todo</a></li>
                    </ul>
                </li>
                    
                <li><a href="">Accesorios</a></li>
                <li><a href="">Acceder</a></li>
            </ul>
        </div>
    </header>
	</>
  )
}
