const comprarServiço= require('../serviços/comprarServiço');

exports.listar = async (req, res) => {
    try {
        const lista = await comprarServiço.listar(req.body);
        return res.status(200).json(lista);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Não foi possível listar suas compras.' });
    }
};



exports.comprar = async (req, res) => {
    try {
        const compra = await comprarServiço.comprar(req.body);
        return res.status(201).json(compra);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Não foi possível finalizar a compra.' });
    }
};



exports.remover = async (req, res) => {
    const compraId = parseInt(req.params.id, 10);

    try {
        const removido = await comprarServiço.remover(compraId);

        if (!removido) {
            return res.status(404).json({ message: 'Compra não encontrada.' });
        }

        return res.status(200).json(removido);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao remover compra.' });
    }
};
