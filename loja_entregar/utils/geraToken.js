const jwt = require('jsonwebtoken');

function generateToken(usuario) {
  const secretKey = process.env.JWT_SECRET; 

  const payload = {
    id: usuario.id,
    nome: usuario.nome,
    funcao: usuario.funcao,
  };


  const options = {
    expiresIn: process.env.JWT_TIME,  
  };


  const token = jwt.sign(payload, secretKey, options);

  return token;
}

module.exports = generateToken;