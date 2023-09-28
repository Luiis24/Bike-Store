import axios from "axios";
import logo from "../assets/img/logoNegro.png";
import "../assets/css/infoBicicletas.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactImageZoom from "react-image-zoom";
import { useCarritoContext } from '../redux/carritoContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const InfoBicicleta = () => {
  const { idproducto } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/detalles/${idproducto}`)
      .then((datos) => {
        setProduct(datos.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [idproducto]);

  if (!product) {
    return <div className="producto-no">Producto No Encontrado</div>;
  }

  const mensajeAgregarProducto = () => {
    if(product.stock < 1){
      toast.error('Producto agotado', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    } else {
    toast.success('producto Agregado', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }
  }

  // Carrito:

  const { addCart } = useCarritoContext();

  return (
    <div>
      <div className="container">
        <div className="logoNegro">
          <img src={logo} className="logo_"></img>
        </div>

        <div key={product.idproducto} className="info">
          <div className="sectionBicicleta">
            <div className="imgBicicletas">
              <ReactImageZoom
                className={`imgBicicletaZoom ${
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
           <img className="imgGrande" src={`../../${product.imagen}`}></img>
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
                  <button className="btn-comprar" onClick={() => addCart(product)}>Comprar Ahora</button>
                </Link>
                <button
                  className="btn-carrito"
                  onClick={() => {addCart(product);
                  mensajeAgregarProducto()}}
                >
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
      <ToastContainer />
    </div>
  );
};

function precio(precio) {
  return precio.toLocaleString("es-ES");
}
