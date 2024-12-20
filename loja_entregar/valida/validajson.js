const { body, param, validationResult } = require('express-validator');

const validaUsuario = [
    body('nome')
        .notEmpty().withMessage('O nome de usuário é obrigatório.')
        .isLength({ min: 3, max: 30 }).withMessage('O nome de usuário deve ter entre 3 e 30 caracteres.'),
    body('senha')
        .notEmpty().withMessage('A senha é obrigatória.')
        .isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres.'),
    body('funcao')
        .isIn(['dono','gerente', 'atendente', 'cliente'])
        .withMessage('A função deve ser "gerente", "atendente" ou "cliente"'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validaUsuario };
