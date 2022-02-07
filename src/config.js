// config.js
const dotenv = require('dotenv').config();

module.exports = {
  NOMBRE: process.env.NOMBRE,
  USUARIO: process.env.USUARIO || '',
  CONTRASENIA: process.env.CONTRASENIA || ''
}