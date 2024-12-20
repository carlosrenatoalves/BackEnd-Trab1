const express = require('express');

const controlaUsuarios = require('../controladores/controlaUsuarios');
const { validaUsuario} = require('../valida/validajson')
const { administradores,atendente } = require('../middlewares/autoriza')

const rotas = express.Router();

rotas.get('/atendentes', atendente,controlaUsuarios.listarUsuarios);
rotas.get('/atendentes/:id',atendente, controlaUsuarios.listarUsuariosId);

rotas.get('/administradores', administradores,controlaUsuarios.listarUsuarios);
rotas.get('/administradores/:id',administradores, controlaUsuarios.listarUsuariosId);
rotas.post('/administradores', administradores, validaUsuario, controlaUsuarios.criarUsuario);
rotas.put('/administradores/:id', administradores, validaUsuario, controlaUsuarios.atualizaUsuario);
rotas.delete('/administradores/:id',administradores, controlaUsuarios.removerUsuario);

module.exports = rotas;
