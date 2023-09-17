
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

const router = createBrowserRouter ([
  {
    path:"/home",
    element: <>
    <Navbar/>
    <Buscador/>
    <Filtros></Filtros>
    <Info_productos/>
    <Paginador/>
    <Footer2/>
    </>
  },

  {
    path:"/bicicleta/:position",
    element: <><Navbar/><InfoBicicleta/>
    <Footer2/>
  </> 
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
