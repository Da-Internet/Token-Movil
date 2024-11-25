
// Usaremos Express para crear el servicio controlador
// Necesitaremos las Rutas (EndPoints)
const express = require('express');
const rutas = express.Router(); // Creamos un objeto especifico para las rutas

//Servicios:
//Login, register, lista de usuarios

//Ruta de login

rutas.post('/login', usersController.login)

//Ruta de registro
rutas.post('/register', usersController.register)

//Ruta para obtener la lista de usuarios
rutas.get('/all_users', usersController.allUsers)

//Ruta para obtener la lista de los usuarios por rol
rutas.get('/users_por_rol/:rol', usersController.usersByRol)

//Ruta para actualizar los usuarios
rutas.put('/update_user/:id', usersController.updateUser)

// Exportaremos el objeto para que se use en otros archivos
module.exports = rutas;