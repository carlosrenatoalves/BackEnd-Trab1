const fs = require('fs').promises;

const leArquivo = async () => {
    try {
        const data = await fs.readFile('./usuarios/usuarios.json', 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Erro ao ler arquivo de usuários:", error);
        return null;
    }
};

const escreveArquivo = async (usuarios) => {
    try {
        await fs.writeFile('./usuarios/usuarios.json', JSON.stringify(usuarios));
    } catch (error) {
        console.error("Erro ao escrever no arquivo de usuários:", error);
    }
};

exports.listarUsuarios = async () => {
    const usuarios = await leArquivo();
    if (!usuarios) return null;
    return usuarios.map(({ password, ...usuario }) => usuario);
};

exports.listarUsuariosId = async (id) => {
    const usuarios = await leArquivo();
    if (!usuarios) return null;

    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) return null;

    return { id: usuario.id, usuarioname: usuario.nome, funcao: usuario.funcao };
};

exports.criarUsuario = async (usuario) => {
    const usuarios = await leArquivo();
    if (!usuarios) return null;

    const usuarioId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    const newUsuario = { id: usuarioId, ...usuario };

    usuarios.push(newUsuario);
    await escreveArquivo(usuarios);

    return newUsuario;
};

exports.atualizaUsuario  = async (id, updatedusuario) => {
    const usuarios = await leArquivo();
    if (!usuarios) return null;

    const index = usuarios.findIndex(usuario => usuario.id === id);
    if (index === -1) return null;

    usuarios[index] = { ...usuarios[index], ...updatedusuario };

    await escreveArquivo(usuarios);

    return usuarios[index];
};

exports.removerUsuario = async (id) => {
    const usuarios = await leArquivo();
    if (!usuarios) return null;

    const index = usuarios.findIndex(usuario => usuario.id === id);
    if (index === -1) return null;

    const removidoUsuario = usuarios.splice(index, 1)[0];

    await escreveArquivo(usuarios);

    return removidoUsuario;
};
