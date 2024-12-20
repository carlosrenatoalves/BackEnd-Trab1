const express = require('express');
const controlaLog = require('../controladores/controlaLog');

const rotas = express.Router();

rotas.post('/login', controlaLog.login);

module.exports = rotas;