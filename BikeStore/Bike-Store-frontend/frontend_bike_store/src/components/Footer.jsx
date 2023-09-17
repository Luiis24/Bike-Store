import "../assets/css/Footer.css"
import logo from "../assets/img/image-logo.png"
import whatsapp from "../assets/img/image-wh.png"
import facebook from "../assets/img/image-f.png"
import instagram from '../assets/img/imageIG.png'
import gmail from "../assets/img/Gmail.png"
export const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="pret">
            <div className="redes" id="Logo">
                <figure>
                        <img src={logo} width="479px" />
                </figure>
            </div>
            <div className="redes-responsive">
            <div className="redes" id="redes1">
                <a href="">
                <img src={whatsapp} width="75px" />
                </a>
                <div>
                <a  className="text" href="https://www.whatsapp.com/?lang=es_LA">+57 3502097020</a>
            </div>
            <div className="redes" id="redes2">
                <a href="#">
                    <img src={facebook} width="75px" />
                </a>
                <a className="text" href="https://es-la.facebook.com/">BikeStore Oficial</a>
                </div>
            <div className="redes" id="redes3">
                <a href="#">
                    <img src={instagram} width="75px" />
                </a>
            <a className="text" href="https://www.instagram.com/">@Bike_Store</a>
            </div>
            </div>
            </div>
            </div>
            <div className="pret2">
            <div className="redes" id="redes4">
                    <img id="text" src={gmail} width="55px" />
                        <a className="te" href="https://www.google.com/intl/es-419/gmail/about/">Info@bikestore.com</a>
                        </div>
                        </div>
            </div>
    </footer>
  )
}


