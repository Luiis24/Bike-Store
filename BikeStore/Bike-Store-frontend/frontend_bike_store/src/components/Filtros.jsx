import React, { useState } from 'react';
import '../assets/css/Filtros.css';

export const Filtros = ({ onOrdenChange }) => {
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const toggleOrden = () => {
    setOrdenAscendente(!ordenAscendente);
    onOrdenChange(!ordenAscendente);
  };

  return (
    <div>
      <div className='btn-ordenar-nombre'>
        <button className='btn-orden-letra' onClick={toggleOrden}>
          {ordenAscendente ? 'De Mayor a Menor' : 'De Menor a Mayor'}
        </button>
      </div>
    </div>
  );
};
