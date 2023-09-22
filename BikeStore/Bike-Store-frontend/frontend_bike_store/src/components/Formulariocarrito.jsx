import "../assets/css/Formulariocarrito.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCarritoContext } from "../redux/carritoContext";
import {useAuth} from '../redux/store'

export const Formulariocarrito = () => {
  const { cart, cantidadProductos, carritoInfo } = useCarritoContext();
  const {user} = useAuth()

  const [values, setValues] = useState({
    departamento: '',
    ciudad: '',
    direccion: '',
    telefono: '',
    descripcion: ''
  })

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleForm = (event) => {
    event.preventDefault()
    console.log(values)
    enviarFormularioEnvio(values)
  }

  const enviarFormularioEnvio = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/formularioEnvio', values, {
        values
      });

      if(response){
        const productos = cart.map(item => item.idproducto)
        const date = new Date().toUTCString();
        const total = carritoInfo;
        const cliente = user.name
        const cantidad = cart.map(item => item.cantidad)
        enviarVenta(productos, date, cantidadProductos, total, cliente, cantidad)
      }

      console.log(response.data); // Muestra la respuesta del servidor
    } catch (error) {
      console.error('Error al llenar formulario', error);
    }
  }

  const enviarVenta = async (productos, date, cantidadProductos, total, cliente, cantidad) => {
    try {
      const response = await axios.post('http://localhost:3000/compra', {
        productos,
        cantidadProductos,
        total,
        date,
        cliente,
        cantidad
      })

      if (response){
        actualizarStock(productos, cantidad);
        let etiquetaAudio = document.createElement("audio")
        etiquetaAudio.setAttribute("src", "./src/assets/sounds/audioCompra.mp3")
        etiquetaAudio.play();
        document.getElementById("compra").style.display = "flex";
        localStorage.clear();
      }
    }
    catch(error){
      alert(error, ' error al comprar')
    }
  }

  const actualizarStock = async(productos, cantidad) => {
    try {
      console.log(productos[0], cantidad[0])
      for (let i = 0; i < productos.length; i++){

      const productoSearch = cart.findIndex(item => item.idproducto === productos[i]);
      const productoStock = cart[productoSearch].stock;

        const idproducto = productos[i];
        const newStock = (productoStock - cantidad[i])
        const response = await axios.put('http://localhost:3000/actualizarStock', {
        newStock,
        idproducto
      })

      if(response) {
        console.log('stock actualizado')
      }
    }
    } 
    catch(error){
      console.log('error actualizar stock')
    }
  }
  

  return (
    <div id="modal-formulario">
      <button id="cerrarFormulario" onClick={() => {
        document.getElementById("modal-formulario").style.top = "-120vh"
      }}>x</button>
    <div className="Container" id="formularioCarrito">
      <form onSubmit={handleForm}>
      <div className="formularioCarrito">
      <div className="sectionInput">
        <p>Departamento:</p>
        <input placeholder="Escribe tú departamento" type="text" name="departamento" onChange={handleInputChange}/>
        <p>Ciudad:</p>
        <input placeholder="Escribe tú ciudad" type="text" name="ciudad" onChange={handleInputChange}/>
        <p>Dirección:</p>
        <input placeholder="Escribe tú dirección" type="text" name="direccion" onChange={handleInputChange}/>
      </div>
      <div className="input-2">
        <p>Teléfono:</p>
        <input placeholder="Escribe tú número de teléfono" type="text" name="telefono" onChange={handleInputChange}/>
        <p>Descripción del domicilio:</p>
        <textarea
          id="input-4"
          placeholder="Describe tú domicilio..."
          name="descripcion"
          onChange={handleInputChange}
        ></textarea>
      </div>
      </div>
      <div className="btnn">
        <p className="p5">(Contra entrega)</p>
        <button type="submit" className="btnComprar">
          <span>Comprar Ahora</span>
        </button>
      </div>
      </form>
    </div>
    </div>
  );
};
