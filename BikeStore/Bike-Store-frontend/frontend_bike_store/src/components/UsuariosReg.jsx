import axios from 'axios';
import '../assets/css/UsuariosReg.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const UsuariosReg = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/usuarios')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const userCount = users.length; // Contador de usuarios

  if (userCount === 0) {
    return <div className='catalogo-vacio'>No Hay Usuarios Registrados</div>;
  }

  return (
    <div>
      <div className='contador-usuarios'>
        <p>Usuarios Registrados: {userCount}</p>
      </div>
      <div className='tabla-usuarios'>
    
            <table>
                <tr><th>ID</th><th>Nombre</th><th>Email</th></tr>
                {users.map(user => (
                <tr> <td>{user.idusuario}</td> <td>{user.username}</td> <td>{user.email}</td></tr>
                ))} 
            </table>


           </div>
     
      </div>
    
  );
}
