const fs = require('fs').promises;
const path = require('path');

const criaAdmin = async (req, res, next) => {
    const pastaUsuarios = path.join(__dirname, '..', 'usuarios');
    const arquivoUsuarios = path.join(pastaUsuarios, 'usuarios.json');

    const usuario = {
        "id": 1,
        "nome": "Usuário 1",
        "senha": "senha1",
        "funcao": "dono"
    };

    try {

        await fs.mkdir(pastaUsuarios, { recursive: true });

        await fs.writeFile(arquivoUsuarios, JSON.stringify([usuario], null, 2));

        next(); 
    } catch (error) {
        console.error('Erro ao criar o arquivo usuarios.json:', error);
        res.status(500).json({ message: 'Erro ao criar o arquivo usuarios.json', error: error.message });
    }
};

module.exports = criaAdmin;
