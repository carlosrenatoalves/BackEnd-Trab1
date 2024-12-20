const autenticaServiço= require('../serviços/autenticaServiço');

exports.login = async (req, res) => {
    const { nome, senha } = req.body;

    // chama a função de login
    const token = await autenticaServiço.login(nome, senha);
    
    // verifica se há um token
    if(token == null){
        return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    return res.status(200).json({ token });
}