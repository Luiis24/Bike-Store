import React from 'react'
import { useFilters } from '../redux/filters';
import '../assets/css/FiltrosCategoria.css'

export const FiltrosCategoria = () => {


            const handleminPrecio = (event) => {
                setFilters(prevState => ({
                    ...prevState,
                    minPrecio: event.target.value
                }))
            }
        
            const handleCategorias = (event) => {
                setFilters(prevState => ({
                    ...prevState,
                    categoria: event.target.value
                }))
            }

            const handleMarcas = (event) => {
                setFilters(prevState => ({
                    ...prevState,
                    marca: event.target.value
                }))
            }

            const handleTallas = (event) => {
                setFilters(prevState => ({
                    ...prevState,
                    talla: event.target.value
                }))
            }
        
            const {filters, setFilters} = useFilters();

    return (
        <div>
            <div className="filtros">
                <div className="categoriaPrecio">
                <label htmlFor='price'>Precio</label>
                <input type='range' id='price' min='0' max='3000000' onChange={handleminPrecio}></input>
                <span>${precio(filters.minPrecio)}</span>
                </div>

                <div className="categoriaTipo">
                <label htmlFor='categoria'>Categoria</label>
                <select id='categoria' onChange={handleCategorias}>
                    <option value="all">Todos</option>
                    <option value="Calle">Calle</option>
                    <option value="Infantil">Infantil</option>
                    <option value="Montaña">Montaña</option>
                    <option value="Ruta">Ruta</option>
                    <option value="Ciudad">Ciudad</option>
                </select>
                </div>

                <div className="categoriaTipo">
                <label htmlFor='marca'>Marca</label>
                <select id='marca' onChange={handleMarcas}>
                    <option value="all">Todos</option>
                    <option value="Trek">Trek</option>
                    <option value="Giant">Giant</option>
                    <option value="GW">GW</option>
                </select>
                </div>

                <div className="categoriaTipo">
                <label htmlFor='talla'>Talla</label>
                <select id='talla' onChange={handleTallas}>
                    <option value="all">Todos</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                </div>
            </div>
        </div>
    )
}
function precio(precio) {
    return precio.toLocaleString('es-ES');
  }