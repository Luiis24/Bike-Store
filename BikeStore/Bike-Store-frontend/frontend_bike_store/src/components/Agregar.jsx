import '../assets/css/Agregar-Producto.css'
import axios from 'axios';
import { useState } from 'react';

export const Agregar = () => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState('');
    const [imagen, setImagen] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/registerProdutcs', {
                nombre,
                precio,
                descripcion,
                tipo,
                imagen
            });

            console.log(response.data); // Muestra la respuesta del servidor
        } catch (error) {
            console.error('Error al registrar el producto', error);
        }
    };
    return (
        <div>
            <div className="formularioAgregar">
            
            <form onSubmit={handleSubmit} className='agregarBici'>
            <div>
                <h1 className="Agregar-Producto-titulo">Agregar</h1>
            </div>
            <div className="Formulario-Agregar">
                <p>Nombre:</p>
                <input placeholder="Nombre Del Producto" type="text"  name='Nombre' onChange={(e) => setNombre(e.target.value)}/>
                <p>Precio:</p>
                <input placeholder="Precio Del Producto" type="text"  name='Precio'onChange={(e) => setPrecio(e.target.value)}/>
                <p>Descripcion:</p>
                <textarea placeholder="Descripcion Del Producto" name='Descripcion'onChange={(e) => setDescripcion(e.target.value)}/>
                <p>Tipo:</p>
                <input placeholder="Tipo Del Producto" type="text" name='Tipo' onChange={(e) => setTipo(e.target.value)}/>
                <p>Imagen:</p>
                <textarea placeholder="Imagen Del Producto" type="text" name='Imagen'onChange={(e) => setImagen(e.target.value)} />
            </div>
            <button className='btnAgregar' type='submit'>
            Agregar
          </button>
            </form>
            </div>
        </div>
    )
}
