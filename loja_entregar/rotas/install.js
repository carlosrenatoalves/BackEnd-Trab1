const express = require('express');
const criaAdmin = require('../middlewares/criaAdmin');
const criaCompras = require('../middlewares/criaCompras');

const installRouter = express.Router();

installRouter.get('/', criaAdmin,criaCompras, (req, res) => {
    res.status(201).json({ message: 'Arquivo usuarios.json criado com sucesso!' });
    res.status(201).json({ message: 'Arquivo compras.json criado com sucesso!' });
});


module.exports = installRouter;
