const jwt = require('jsonwebtoken');
exports.compara= (req, res, next) => {
    const credencial = req.headers['autorizacao'];

    const token = credencial ;

    if(!token){
        return res.status(401).json({ message: 'Acesso negado' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.status(403).json({ message: 'Token inválido' });
        }

        req.user = user;
    })

    if(req.body.idUsuario===req.user.id){
        next();
    }else{
        return res.status(400).json({ message: 'Você não tem permissão' });
    }
}