import React from 'react'
import '../assets/css/Filtros.css'

export const Filtros = () => {
    const ordenarAscendente = () =>
        Array.from(document.getElementsByClassName("tarjeta"))
            .sort((a, b) => a.innerText.localeCompare(b.innerText))
            .forEach(nombre => nombre.parentNode.appendChild(nombre));
    const ordenarDescendente = () =>
        Array.from(document.getElementsByClassName("tarjeta"))
            .sort((a, b) => b.innerText.localeCompare(a.innerText))
            .forEach(nombre => nombre.parentNode.appendChild(nombre));

    return (
        <div>
            <div className='btn-ordenar-nombre'>
            <button className='btn-orden-letra' onClick={ordenarAscendente}>Costoso</button>
            <button className='btn-orden-letra' onClick={ordenarDescendente}>Economico</button>
            </div>
        </div>
    )
}

