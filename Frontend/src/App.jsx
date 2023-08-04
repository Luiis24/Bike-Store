import { useState } from 'react'
import { Info_productos } from './components/Info_productos'
import { Paginador } from './components/Paginador'
import {Buscador} from './components/Buscador'
import { Navbar } from './components/Navbar'
import {Footer} from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <Buscador></Buscador>
      <Info_productos ></Info_productos>
      <Info_productos ></Info_productos>
      <Info_productos ></Info_productos>
      <Info_productos ></Info_productos>
      <Info_productos ></Info_productos>
      <Paginador></Paginador>
      <Footer></Footer>


      
      
    </>
  )
}

export default App
