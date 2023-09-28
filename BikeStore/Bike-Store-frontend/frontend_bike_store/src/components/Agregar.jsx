import '../assets/css/Agregar-Producto.css';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Agregar = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState('');
    const [imagen, setImagen] = useState('');
    const [marca, setMarca] = useState('');
    const [color, setColor] = useState('');
    const [talla, setTalla] = useState('');
    const [stock, setStock] = useState('');

    const mensajeProductoRegistrado = () => {
        toast.success('Producto agregado en catalogo', {
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

    const mensajeProductoNoRegistrado = () => {
        toast.error('Error al agregar el producto', {
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/registerProdutcs', {
                nombre,
                precio,
                descripcion,
                tipo,
                imagen,
                marca,
                color,
                talla,
                stock
            });

            if (response) {
                mensajeProductoRegistrado()
            }
        } catch (error) {
            mensajeProductoNoRegistrado()
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
                        <input placeholder="Nombre Del Producto" type="text" name='Nombre' onChange={(e) => setNombre(e.target.value)} />
                        <p>Marca:</p>
                        <input placeholder="Marca Del Producto" type="text" name="marca" onChange={(e) => setMarca(e.target.value)} />
                        <p>Precio:</p>
                        <input placeholder="Precio Del Producto" type="text" name='Precio' onChange={(e) => setPrecio(e.target.value)} />
                        <p>Descripcion:</p>
                        <textarea placeholder="Descripcion Del Producto" name='Descripcion' onChange={(e) => setDescripcion(e.target.value)} />
                        <p>Tipo:</p>
                        <input placeholder="Tipo Del Producto" type="text" name='Tipo' onChange={(e) => setTipo(e.target.value)} />
                        <p>Imagen:</p>
                        <textarea placeholder="Imagen Del Producto" type="text" name='Imagen' onChange={(e) => setImagen(e.target.value)} />
                        <p>Color:</p>
                        <input placeholder="Color Del Producto" type="text" name='Color' onChange={(e) => setColor(e.target.value)} />
                        <p>Talla:</p>
                        <input placeholder="Talla Del Producto" type="text" name='Talla' onChange={(e) => setTalla(e.target.value)} />
                        <p>Stock:</p>
                        <input placeholder="Stock Del Producto" type="text" name='Stock' onChange={(e) => setStock(e.target.value)} />
                    </div>
                    <button className='btnAgregar' type='submit'>
                        Agregar
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};
