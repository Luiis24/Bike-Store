const { Pool } = require('pg');
const { CONFIG_BD } = require('../config/db');
const e = require('express');
const bcrypt = require('bcrypt');


const pool = new Pool(CONFIG_BD)

const getProducts = (req, res)=> {
    pool.query('SELECT * FROM productos', (error, result) => {
        if (error){
            console.error('Error al obtener los datos', error);
            res.status(500).send('Error al obtener los datos');
        } else {
            res.json(result.rows);
        }
        });
    };


    const usuarios = (req, res)=> {
        pool.query('SELECT * FROM usuarios', (error, result) => {
            if (error){
                console.error('Error al obtener los datos', error);
                res.status(500).send('Error al obtener los datos');
            } else {
                res.json(result.rows);
            }
            });
        };


    const registerUser = (req, res)=>{
        console.log (req.body)
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Falta informacion requerida' });
        }
        pool.query('SELECT * FROM usuarios Where Username = $1 OR email = $2', [username, email], (error, result) => {
            if(error){
                console.error('Error al consultar la base de datos', error);
                return res.status(500).json ({error: 'Error al registrar el usuario', error});
            }
            if (result.rows.length > 0){
           
                return res.status(409).json({ error: 'El usuario ya existe'});
            }
            pool.query('INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)', [username,email,password],(error)=>{
                if (error){
                    console.error('Error al insertar el ususario en la base de datos', error);
                    return res.status(500).json({ error: 'Error al registrar el usuario' });
                }
                res.status(201).json({ message: 'Usuario registrado exitosamente'});
            })
        });
    };
    
    const loginUser = async (req, res) => {
        const { email, password } = req.body;
    
        if (!email || !password) {
            return res.status(400).json({ error: 'Falta informacion requerida' });
        }
    
        try {
            const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    
            if (result.rows.length === 0) {
                return res.status(401).json({ error: 'Usuario no encontrado' });
            }
    
            const user = result.rows[0];
    
            if (password === user.password) {
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            } else {
                return res.status(401).json({ error: 'Contraseña incorrecta' });
            }
        } catch (error) {
            console.error('Error al consultar la base de datos', error);
            return res.status(500).json({ error: 'Error al iniciar sesión' });
        }
    };
    
    const registerProdutcs = (req, res)=>{
        console.log (req.body)
        const { nombre, precio, descripcion, tipo, imagen } = req.body;
        
        if (!nombre || !precio || !descripcion || !tipo || !imagen) {
            return res.status(400).json({ error: 'Falta informacion requerida' });
        }
        pool.query('SELECT * FROM productos Where nombre = $1 OR precio = $2 OR descripcion =$3 OR tipo = $4 OR imagen = $5', [nombre, precio,descripcion,tipo,imagen], (error, result) => {
            if(error){
                console.error('Error al consultar la base de datos', error);
                return res.status(500).json ({error: 'Error al registrar el Producto', error});
            }
            pool.query('INSERT INTO productos (nombre, precio, descripcion, tipo, imagen) VALUES ($1, $2, $3, $4, $5)', [nombre,precio,descripcion,tipo,imagen],(error)=>{
                if (error){
                    console.error('Error al insertar el ususario en la base de datos', error);
                    return res.status(500).json({ error: 'Error al registrar el producto' });
                }
                res.status(201).json({ message: 'Producto registrado exitosamente'});
            })
        });
    };
   

   


  
  module.exports = {
    getProducts,
    registerUser,
    usuarios,
    loginUser,
    registerProdutcs
  };
  
    
