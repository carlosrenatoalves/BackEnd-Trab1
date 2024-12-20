const express = require('express');
const controlaCompra= require('../controladores/controlaCompra');
const { administradores,atendente, cliente } = require('../middlewares/autoriza')
const {compara} = require('../middlewares/comparaUsuarios')
const {validaProduto} = require('../valida/validaProduto')

const rotas = express.Router();

rotas.post('/comprar',cliente,compara,validaProduto,controlaCompra.comprar);
rotas.get('/listar',cliente,compara, controlaCompra.listar);
rotas.delete("/deletar/:id",cliente,compara,controlaCompra.remover)

module.exports = rotas;