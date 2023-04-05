const { getConnection } = require("./dao");

// Cria um objeto vazio para armazenar as tentativas de login malsucedidas
const tentativasFalhas = {};

async function autenticarUsuario(login, senha) {
    const connection = await getConnection();

    // Consulta o status de bloqueio do usuário no banco de dados
    const [rowsBloqueio] = await connection.execute(
        "SELECT bloqueado FROM usuarios WHERE email = ? OR user_name = ?",
        [login, login]
    );

    // Verifica se o usuário está bloqueado antes de tentar fazer o login
    if (rowsBloqueio.length > 0 && rowsBloqueio[0].bloqueado === 1) {
        return { success: false, message: "Usuário bloqueado! Por favor entrar em contato." };
    }

    // Tenta fazer o login normalmente
    const [rowsLogin] = await connection.execute(
        "SELECT * FROM usuarios WHERE (email = ? OR user_name = ?) AND senha = MD5(?)",
        [login, login, senha]
    );
    await connection.end();

    if (rowsLogin.length > 0) {
        // Limpa as tentativas falhas do usuário se ele logar com sucesso
        delete tentativasFalhas[login];
        return { success: true };
    } else {
        // Incrementa o contador de tentativas falhas para o usuário
        tentativasFalhas[login] = (tentativasFalhas[login] || 0) + 1;

        // Se o usuário atingir o limite de tentativas, invalida sua sessão e retorna false
        if (tentativasFalhas[login] >= 3) {
            bloquearUsuario(login);
            return { success: false, message: "Usuário bloqueado! Por favor entrar em contato." };
        }

        return { success: false, message: "E-mail ou senha incorretos." };
    }
}

async function bloquearUsuario(login) {
    // Atualiza o status de bloqueio do usuário no banco de dados
    const connection = await getConnection();
    await connection.execute(
        "UPDATE usuarios SET bloqueado = 1 WHERE email = ? OR user_name = ?",
        [login, login]
    );
    await connection.end();
    console.log(`Usuário ${login} bloqueado após 3 tentativas de login malsucedidas.`);
}

async function criarSessao(email) {

}

module.exports = {
    autenticarUsuario,
    bloquearUsuario,
    criarSessao
};
