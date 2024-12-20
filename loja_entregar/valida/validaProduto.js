const { body, param, validationResult } = require('express-validator');

const validaProduto= [
        body('id')
            .isInt({ min: 1 }).withMessage('O ID do produto deve ser um número inteiro maior que 0.'),
        body('produto')
            .isString().notEmpty().withMessage('O campo produto é obrigatório'),
        body('idUsuario')
            .isInt({ min: 1 }).withMessage('O ID do usuário deve ser um número inteiro maior que 0.'),
        body('nome')
            .isString().notEmpty().withMessage('O nome do usuário é obrigatório'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validaProduto };
