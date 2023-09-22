import '../assets/css/buscador.css'
import logo from '../assets/img/image.png'
// import imagenFondo from '../assets/img/banner.png'

export const Buscador = () => {
  return (
    // <div className='buscador'>
    //   <div className="slider">
    //   <img src={imagenFondo}></img>
    //   <img src="https://images.unsplash.com/photo-1572508589584-94d778209dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"></img>
    //   <img src={imagenFondo}></img>
    //   </div>

    //    {/* <div className='logoBuscador'>
    //     <img src={logo}></img>
    //    </div> */}

    // </div>

    <div className="buscador">
      {/* <div className="capa"></div> */}
        <div className='logoBuscador'>
          <img src={logo}></img>
        </div>
    </div>
  )
}
