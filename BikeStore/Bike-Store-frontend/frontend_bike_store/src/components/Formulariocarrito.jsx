import "../assets/css/Formulariocarrito.css";
export const Formulariocarrito = () => {
  return (
    <div className="Container" id="formularioCarrito">
      <div className="formularioCarrito">
      <div className="sectionInput">
        <p>Departamento:</p>
        <input placeholder="Escribe tú departamento" type="text" />
        <p>Ciudad:</p>
        <input placeholder="Escribe tú ciudad" type="text" />
        <p>Dirección:</p>
        <input placeholder="Escribe tú dirección" type="text" />
      </div>
      <div className="input-2">
        <p>Teléfono:</p>
        <input placeholder="Escribe tú número de teléfono" type="text" />
        <p>Descripción del domicilio:</p>
        <textarea
          id="input-4"
          placeholder="Describe tú domicilio..."
        ></textarea>
      </div>
      </div>
      <div className="btnn">
        <p className="p5">(Contra entrega)</p>
        <button className="btnComprar" onClick={() => {
                document.getElementById("compra").style.display = "flex"
              }}>
          <span>Comprar Ahora</span>
        </button>
      </div>
    </div>
  );
};
