const { Pool } = require('pg');
const { CONFIG_BD } = require('../config/db');
const e = require('express');

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

    const registerUser = (req, res)=>{
        console.log (req.body)
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Falta informacion requerida' });
        }
        pool.query('SELEC * FROM usuarios Where Username = $1 Or email = $2', [username, email], (error, result) => {
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
   
    module.exports = {
        getProducts,
        registerUser
    };
