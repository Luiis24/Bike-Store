import '../assets/css/Registro.css'
import logoi from "../assets/img/image-logo.png.png"
import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export const Registro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mensajeNoRegistrado = () => {
    toast.error('Error al registrar usuario', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const enviar = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/registerUser', {
        username,
        email,
        password
      });

      if(response){
        location.href = './sesion'
      }

    } catch (error) {
      mensajeNoRegistrado()
    }
  };
  return (
    <div className='registro'>
         <div className='cerrar'>  <Link to="/home">
      ↩ </Link>  </div>
      <div className='inicio'>
        <div className='logoi'>
          <img src={logoi} />
        </div>
        <h1>Registrarse</h1>
        <form onSubmit={enviar}>
          <div className='formu'>
            <input placeholder='Nombre' type='text' name='username' onChange={(e) => setUsername(e.target.value)} />
            <input placeholder='Correo' type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Contraseña' type='password' name='password' onChange={(e) => setPassword(e.target.value)} />

          </div>
          <a className='a1' href="/sesion">Ya tienes cuenta?</a>
          <p>Ya tienes cuenta?<a href="/sesion" id='llevar-inicio'>Iniciar sesión</a></p>
          <button className='btn' type='submit'>
            Registrarse
          </button>
        </form>

        <div>
          <button className='bnt-facebook'>
            <span className='text-facebook'>Continuar con Facebook</span>
            <img className='logo-facebook' src="./src/assets/img/logo-facebook.png" />
          </button>
        </div>
        <button className='btn-google'>
          <span className='text-google'>Continuar con Google</span>
          <img className='logo-google' src="./src/assets/img/google-logo.png" />
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}

