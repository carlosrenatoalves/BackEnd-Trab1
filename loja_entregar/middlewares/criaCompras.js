const fs = require('fs').promises;
const path = require('path');

const criaCompras = async (req, res, next) => {
    const pastaCompras = path.join(__dirname, '..', 'compras');
    const arquivoCompras = path.join(pastaCompras, 'compras.json');


    try {

        await fs.mkdir(pastaCompras, { recursive: true });

        await fs.writeFile(arquivoCompras, JSON.stringify([], null, 2));

        next(); 
    } catch (error) {
        console.error('Erro ao criar o arquivo compras.json:', error);
        res.status(500).json({ message: 'Erro ao criar o arquivo compras.json', error: error.message });
    }
};

module.exports = criaCompras;
