import axios from "axios";
import logo from "../assets/img/logoNegro.png";
import "../assets/css/infoBicicletas.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactImageZoom from "react-image-zoom";
import { useCarritoContext } from '../redux/carrito';

export const InfoBicicleta = () => {
  const [contadorCar, setContadorCar] = useState(0);
  const { position } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((datos) => {
        const productAtIndex = datos.data[position];
        setProduct(productAtIndex);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [position]);

  if (!product) {
    return <div className="producto-no">Producto No Encontrado</div>;
  }

  // Carrito:

const {cart, addCart} = useCarritoContext()


  return (
    <div>
      <p className="contadorCar">{contadorCar}</p>
      <div className="container">
        <div className="logoNegro">
          <img src={logo} className="logo_"></img>
        </div>

        <div key={product.idproductos} className="info">
          <div className="sectionBicicleta">
            <div className="imgBicicletas">
              <div className="imgBicicletas">
                <ReactImageZoom
                  className={`imgBicicletas ${
                    window.innerWidth <= 768 ? "disable-zoom" : ""
                  }`}
                  {...{
                    width: 600,
                    height: 420,
                    zoomWidth: 600,
                    img: `../../${product.imagen}`,
                    zoomPosition: "original",
                  }}
                />
              </div>
            </div>
            <div className="sectionInfo">
              <h2>{product.nombre}</h2>
              <p>${precio(product.precio)}</p>
              <div className="descripcionIB">
                <h4>Marca:</h4>
                <p>{product.marca}</p>
              </div>
              <div className="descripcionIB">
                <h4>Tipo:</h4>
                <p>{product.tipo}</p>
              </div>
              <div className="descripcionIB">
                <h4>Color:</h4>
                <p>{product.color}</p>
              </div>
              <div className="descripcionIB">
                <h4>Talla:</h4>
                <p>{product.talla}</p>
              </div>
              <div className="descripcionIB">
                <h4>Stock:</h4>
                <p>{product.stock}</p>
              </div>
              <div className="btn-infoBicicleta">
                <Link to="/carrito">
                  <button className="btn-comprar">Comprar Ahora</button>
                </Link>
                <button
                  className="btn-carrito"
                  // onClick={() => {
                  //   setContadorCar(contadorCar + 1);
                  // }}
                  onClick={() => addCart(product)}>
                
                  Añadir Al carrito
                </button>
              </div>
            </div>
          </div>
          <div className="informacionBicicleta">
            <div className="descripcionText">
              <p>{product.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function precio(precio) {
  return precio.toLocaleString("es-ES");
}
