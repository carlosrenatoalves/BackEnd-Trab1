const fs = require('fs').promises;

const leArquivo = async () => {
    try {
        const data = await fs.readFile('./compras/compras.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Erro ao ler arquivo de compras:", error);
        return null;
    }
};

const escreveArquivo = async (compra) => {
    try {
        await fs.writeFile('./compras/compras.json', JSON.stringify(compra));
    } catch (error) {
        console.error("Erro ao escrever no arquivo de compras", error);
    }
};


exports.listar = async (compra2) => {
    const compras = await leArquivo();
    if (!compras) return null;


    const compra = compras.filter(c => c.idUsuario === compra2.idUsuario);
    if (!compra) return null;

    return compra
};


exports.listarAll = async () => {
    const compras = await leArquivo();
    if (!compras) return null;

    return compras
};

exports.comprar = async (compra) => {
    const compras = await leArquivo();
    if (!compras) return null;

    // Descobre o próximo id da lista
    const compraId = compras.length > 0 ? compras[compras.length - 1].id + 1 : 1;
    const novaCompra = { id: compraId, ...compra };

    compras.push(novaCompra);
    await escreveArquivo(compras);

    return novaCompra;
};


exports.remover= async (id) => {
    const compras = await leArquivo();
    if (!compras) return null;

    const index = users.findIndex(user => compra.id === id);
    if (index === -1) return null;

    const removido = compras.splice(index, 1)[0];

    await escreveArquivo(compras);

    return removido ;
};
