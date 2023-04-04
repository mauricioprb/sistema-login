const mysql = require("mysql2/promise");
const { getConnection } = require("./dao");

async function autenticarLogin(login, senha) {
    const connection = await getConnection();
    const [rows] = await connection.execute(
        "SELECT * FROM usuarios WHERE (email = ? OR user_name = ?) AND senha = MD5(?)",
        [login, login, senha]
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
