
import '../assets/css/Paginador.css'
export const Paginador = ({ pagina, setPagina, maximo }) => {

  const siguientePagina = () => {
    if (pagina < maximo) {
      setPagina(pagina + 1)
    }
  }

  const anteriorPagina = () => {
    if (pagina > 1) {
      setPagina(pagina - 1)
    }
  }

  return (
    <>
      <div className='paginador_componente'>

        <button className='btnPaginador' onClick={anteriorPagina}><img className="paginadorAnterior" src="./src/assets/img/flecha.png" alt="" /></button>
        <div className='contadorPagina' id='contador'>{pagina} De {maximo}</div>
        <button className='btnPaginador' onClick={siguientePagina}><img src="./src/assets/img/flecha.png" alt="" /></button>

      </div>

    </>
  )
}
