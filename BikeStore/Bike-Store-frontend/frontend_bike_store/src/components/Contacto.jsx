import copyr from '../assets/img/copyRight.png'
import '../assets/css/contacto.css'
import equipo from '../assets/img/equipo.png'

export const Contacto = () => {
    return (
        <div>
            <div className="sectionCopyright">
                <img src={copyr} className='copyR'></img>
                <h2>CopyRight</h2>
                <p>Todos los contenidos de este Sitio están sujetos a derechos de propiedad por las leyes de Derechos de Autor y demás Leyes relativas Internacionales a BikeStore y de terceros titulares de los mismos que han autorizado debidamente su inclusión.<br></br>

                    El uso de imágenes, fragmentos de videos y demás material que sea objeto de protección de los derechos de autor, será exclusivamente para fines educativos e informativos, y cualquier uso distinto como el lucro, reproducción, edición o modificación, será perseguido y sancionado por el respectivo titular de los Derechos de Autor.</p>
                <h3 className='equipoTxt'>Equipo</h3>
                <div className="sectionEquipo">

                    <div className="equipo">
                        <img src={equipo} className='personaEquipo'></img>
                        <h3>Camilo Andres Jaramillo</h3>
                    </div>
                    <div className="equipo">
                        <img src={equipo} className='personaEquipo'></img>
                        <h3>Jhon Eduard España</h3>
                    </div>
                    <div className="equipo">
                        <img src={equipo} className='personaEquipo'></img>
                        <h3>Luis Fernando Morales</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}