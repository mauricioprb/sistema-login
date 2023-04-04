const mysql = require("mysql2/promise");
const { getConnection } = require("./dao");

async function autenticarLogin(emailOuUsuario, senha) {
    const connection = await getConnection();
    const [rows] = await connection.execute(
        "SELECT * FROM usuarios WHERE (email = ? OR usuario = ?) AND senha = MD5(?)",
        [emailOuUsuario, emailOuUsuario, senha]
    );
    await connection.end();

    if (rows.length > 0) {
        return true;
    } else {
        return false;
    }
}

async function criarSessao(email) {

}

module.exports = {
    autenticarLogin,
    criarSessao
};
