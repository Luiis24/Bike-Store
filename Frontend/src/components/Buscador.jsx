import '../assets/css/buscador.css'
import logo from '../assets/img/image.png'

export const Buscador = () => {
  return (
    <div className='buscador'>
        
       <div className='logoBuscador'>
        <img src={logo}></img>
          <input type='search' placeholder='Buscar...' className='boton'></input>
       </div>
            
    </div>
  )
}
