
import '../assets/css/Sesión.css';
import logoi from "../assets/img/image-logo.png.png";
import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../redux/store.jsx';
import { useAdmin } from '../redux/admin';

export const Sesión = () => {
  const { user, setUser } = useAuth();
  const { admin, setAdmin} = useAdmin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const instance = axios.create({
    baseURL: 'http://localhost:3000/login',
    withCredentials: true
  });
  
  
  
  const enviar = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });

      const userData = {
        name : email
      }

      const userRegister = () => {
            setUser(userData)
            if(email == 'admin@admin.com'){
            setAdmin(true)}else{setAdmin(false)}
            location.href = "/home"
      }

      if(response) {
        alert('usuario ingresado')
        userRegister()
      }

      console.log(response); 
    } catch (error) {
      if(error){
        alert('Usuario no registrado')
      }
      console.error('Error al iniciar sesión', error);
    }
  };


  return (
    <div className='sesion'>
      <div className='inicioSesion'>
        <div className='logoi'>
          <img src={logoi} alt="Logo" />
        </div>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={enviar}>
          <div className='formu'>
            <input
              type='email'
              placeholder='Correo'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a className='a1' href="#">No tienes cuenta?</a>
          <p>No tienes cuenta?<a href="/registro" id='llevar-inicio'>Registrate</a></p>
          <button className='btn' type='submit'>
            <span>Iniciar Sesión</span>
          </button>
        </form>
        <div>
          <button className='bnt-facebook'>
            <span className='text-facebook'>Continuar con Facebook</span>
            <img className='logo-facebook' src="./src/assets/img/logo-facebook.png" alt="Facebook Logo" />
          </button>
        </div>
        <button className='btn-google'>
          <span className='text-google'>Continuar con Google</span>
          <img className='logo-google' src="./src/assets/img/google-logo.png" alt="Google Logo" />
        </button>
      </div>
    </div>
  )
}
