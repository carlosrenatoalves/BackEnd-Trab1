const jwt = require('jsonwebtoken');

exports.verificaToken = (req, res, next) => {
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
        next();
    })
}

exports.administradores = (req, res, next) => {
    this.verificaToken(req, res, (err) => {
        if (err) {
            return res.status(401).json({ message: 'Acesso negado' });
        }

        if (req.user.funcao!="dono" && req.user.funcao!="gerente" ) {
            return res.status(403).json({ message: 'Acesso negado: privilégios insuficientes' });
        }

        next();
    });
};


exports.atendente = (req, res, next) => {
    this.verificaToken(req, res, (err) => {
        if (err) {
            return res.status(401).json({ message: 'Acesso negado2' });
        }
        if (!req.user.funcao==="atendente" ) {
            return res.status(403).json({ message: 'Acesso negado: privilégios insuficientes' });
        }
        next();
    });
};

exports.cliente = (req, res, next) => {
    this.verificaToken(req, res, (err) => {
        if (err) {
            return res.status(401).json({ message: 'Acesso negado' });
        }

        
        if (!req.user.funcao==="cliente" ) {
            return res.status(403).json({ message: 'Acesso negado: privilégios insuficientes' });
        }

        next();
    });
};

