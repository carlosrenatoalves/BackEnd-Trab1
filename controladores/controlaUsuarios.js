const usuariosServiço = require('../serviços/usuariosServiço');

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosServiço.listarUsuarios();
        return res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao buscar usuários.' });
    }
};

exports.listarUsuariosId = async (req, res) => {
    const usuarioId = parseInt(req.params.id, 10);

    try {
        const usuario = await usuariosServiço.listarUsuariosId(usuarioId);

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao buscar o usuário.' });
    }
};

exports.criarUsuario = async (req, res) => {
    try {
        const newusuario = await usuariosServiço.criarUsuario(req.body);
        return res.status(201).json(newusuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao criar o usuário.' });
    }
};

exports.atualizaUsuario = async (req, res) => {
    const usuarioId = parseInt(req.params.id, 10);

    try {
        const updatedusuario = await usuariosServiço.atualizaUsuario(usuarioId, req.body);

        if (!updatedusuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        return res.status(200).json(updatedusuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao atualizar o usuário.' });
    }
};

exports.removerUsuario = async (req, res) => {
    const usuarioId = parseInt(req.params.id, 10);

    try {
        const deletedusuario = await usuariosServiço.removerUsuario(usuarioId);

        if (!deletedusuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        return res.status(200).json(deletedusuario);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao deletar o usuário.' });
    }
};
