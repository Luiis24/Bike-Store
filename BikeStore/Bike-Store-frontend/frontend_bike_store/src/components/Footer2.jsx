import "../assets/css/Footer2.css"
import logo from "../assets/img/image-logo.png"
import whatsapp from "../assets/img/image-wh.png"
import facebook from "../assets/img/image-f.png"
import instagram from '../assets/img/imageIG.png'
import gmail from "../assets/img/Gmail.png"
export const Footer2 = () => {
    return (
        <footer>
            <div className="containerFooter">
                    <div id="Logo">
                        <figure>
                            <img src={logo} width="479px" />
                        </figure>
                    </div>
                    <div className="redesFooter">
                        <div className="red">
                            <a href="">
                                <img src={whatsapp} className="redImg"/>
                            </a>
                            <a className="text" href="https://www.whatsapp.com/?lang=es_LA">+57 3502097020</a>
                        </div>
                        <div className="red">
                            <a href="">
                                <img src={facebook}  className="redImg"/>
                            </a>
                            <a className="text" href="https://es-la.facebook.com/">BikeStore Oficial</a>
                        </div>
                        <div className="red">
                            <a href="">
                                <img src={instagram} className="redImg" />
                            </a>
                            <a className="text" href="https://www.instagram.com/">@Bike_Store</a>
                        </div>
                        <div className="red">
                            <a href="">
                                <img src={gmail} className="gmail"/>
                            </a>
                            <a className="text" href="https://www.google.com/intl/es-419/gmail/about/">Info@bikestore.com</a>
                        </div>
                        
                    </div>

                
            </div>
            <div className="copyRight">
               <a href="/contacto">copyRight - BikeStore</a>
            </div>
        </footer>
    )
}


