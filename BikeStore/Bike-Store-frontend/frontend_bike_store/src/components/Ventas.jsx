import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../assets/css/ventas.css'

export const Ventas = () => {
    const [ventas, setVentas] = useState([]);

  const getVentas = async () => {
        axios.get('http://localhost:3000/ventas')
      .then(datos => {
        setVentas(datos.data);
        console.log(datos.data)
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }

  useEffect(() => {
    getVentas()
  }, []);

  return (
    <div className='containerVentas'>
        <h2>Ventas:</h2>
        {ventas[0] ? ventas.map((venta) => (
            <>
                <div className="venta" key={venta.idVenta}>
                    <div className="ventaInfo">
                        <h3>Producto(s):</h3>
                        <div className="productosVentas">{venta.productos.map(p => ( <a className='producto' href={`/detalles/${p}`}>{p}, </a> ))}</div>
                        <div className="productosVentas">{venta.cantidad.map(c => ( <p className='cantidadVenta'>cantidad: {c}</p>))}</div>
                    </div>
                    <div className="ventaInfo">
                        <h3>Cantidad total:</h3><p>{venta.cantidaProductos}</p>
                    </div>
                    <div className="ventaInfo">
                        <h3>Total:</h3><p className='precioVenta'>{vcar(venta.total)}</p>
                    </div>
                    <div className="ventaInfo">
                        <h3>Cliente:</h3><p>{venta.cliente}</p>
                    </div>
                    <div className="ventaInfo">
                        <h3>Fecha:</h3><p>{venta.date}</p>
                    </div>
                </div>
            </>
        )) : <div className='carrito-vacio'>No hay ventas</div>}
    </div>
  )
}

function vcar(vcar) {
    return vcar.toLocaleString('es-ES');
  }
  