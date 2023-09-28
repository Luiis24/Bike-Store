import { Info_productos } from './components/Info_productos'
import { Paginador } from './components/Paginador'
import {Buscador} from './components/Buscador'
import { Navbar } from './components/Navbar'
import { Footer2 } from './components/Footer2'
import { InfoBicicleta } from './components/InfoBicicleta'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Registro } from './components/Registro'
import { Sesión } from './components/sesión'
import { Carrito } from './components/Carrito'
import { Agregar } from './components/Agregar'
import { Contacto } from './components/Contacto'
import {Filtros} from './components/Filtros'
import { Categorias } from './components/Categorias'
import { Ventas } from './components/Ventas'
import { Compras } from './components/Compras'
import { UsuariosReg } from './components/UsuariosReg'

const router = createBrowserRouter ([
  {
    path:"/home",
    element: <>
    <Navbar/>
    <Buscador/>
    <Filtros></Filtros>
    <Info_productos/>
    <Footer2/>
    </>
  },

  {
    path: "/UsuariosReg",
    element: <>
    <Navbar/>
    <UsuariosReg/>
  
    </>
  },

  {
    path: "/detalles/:idproducto",
    element: <><Navbar/><InfoBicicleta/><Footer2/></>
  },
  

  {
    path:"/registro",
    element: <><Registro/></> 
  },

  {
    path:"/sesion",
    element: <><Sesión/></> 
  },

  {
    path:"/carrito",
    element: <><Carrito/></> 
  },

  {
    path:"/agregar",
    element:<><Agregar/></>
  },

  {
    path:"/contacto",
    element:<><Navbar/><Contacto/><Footer2/></>
  },

  {
    path:"/categorias",
    element:<><Navbar/><Categorias/></>
  },

  {
    path:"/ventas",
    element:<><Navbar/><Ventas/></>
  },

  {
    path:"/compras",
    element:<><Navbar/><Compras/></>
  }


])

function App() {

  return (
    <>

<RouterProvider router={router} />
    
    {/* <Navbar></Navbar> */}
      {/* <Buscador></Buscador>
      <Info_productos ></Info_productos>
      <Info_productos ></Info_productos>
      <Info_productos ></Info_productos>
      <Info_productos ></Info_productos>
      <Info_productos ></Info_productos>
      <Paginador></Paginador> */}
      {/* <InfoBicicleta/> */}
      {/* <Preguntas/> */}
      {/* <Footer></Footer>  */}
      
    </>
  )
}

export default App
