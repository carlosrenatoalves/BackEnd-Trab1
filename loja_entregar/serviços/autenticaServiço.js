const fs = require('fs').promises;
const path = require("path")
const geraToken = require('../utils/geraToken'); 

exports.login = async(nome, senha)=> {
  const caminhoFile = "./usuarios/usuarios.json"

  const data = await fs.readFile(caminhoFile , 'utf-8')

    const usuarios = JSON.parse(data);

    const user = usuarios.find(u => u.nome === nome && u.senha === senha);

    if (user) {
      const token = geraToken(user);
      console.log('Login bem-sucedido! Token gerado:', token);
      return token;
    } else {
      console.log('Usuário ou senha inválidos!');
      return null;
    }
  }

