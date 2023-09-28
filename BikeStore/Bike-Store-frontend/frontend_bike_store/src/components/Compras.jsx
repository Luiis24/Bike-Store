import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useAuth } from '../redux/store.jsx';
import '../assets/css/compras.css'
import ReactLoading from 'react-loading';
import { useLoading } from '../redux/loading';

export const Compras = () => {
  const [ventas, setVentas] = useState([]);
  const { user } = useAuth()
  const {isLoading, setIsLoading} = useLoading()

  if (!user) {
    return <div>Ingresa tu usuario</div>
  }

  const getVentas = async () => {
    setIsLoading(true)
    axios.get('http://localhost:3000/ventas')
      .then(datos => {
        if(datos.data){
          setVentas(datos.data);
          setIsLoading(false)
        }
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setIsLoading(false)
      });
  }

  useEffect(() => {
    getVentas()
  }, []);

  const comprasDeUsuario = ventas.filter((venta) => venta.cliente == user.name)

  return (
    <div className='compras-Usuario'>
      { isLoading ? <ReactLoading type="spin" color="#000" className='loading'/> : ''}
      <h2>Compras de {user.name}</h2>
      {comprasDeUsuario[0] ? 
      <div className="container-tabla-compras">
      <table className='tabla-compras' border="0">
      <tr className='headTC'>
        <th>Producto(s)</th>
        <th>cantidad</th>
        <th>Cantidad Total</th>
        <th>Precio</th>
        <th>Fecha</th>
      </tr> 

      {comprasDeUsuario.map(compra => (
            <tr className='bodyTC' id={compra.idVenta}>
              <td className='productosTC'>
                {compra.productos.map(producto => (
                <a href={`/detalles/${producto}`} >{producto}</a>
                ))}
              </td>
              <td className='cantidadTC'>
                {compra.cantidad.map(cantidad => (
                <p>{cantidad}</p>
                ))}
              </td>
              <td>{compra.cantidaProductos}</td>
              <td>${compra.total.toLocaleString('es-ES')}</td>
              <td>{compra.date}</td>
            </tr>
          
      ))} </table></div> : <div className='carrito-vacio'>No hay compras</div>}


    </div>
  )
}
