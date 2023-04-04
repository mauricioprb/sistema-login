const mysql = require("mysql2/promise");
require("dotenv").config(); // Importa o pacote dotenv para carregar as variáveis de ambiente do arquivo .env

async function getConnection() {
    const connection = await mysql.createConnection({
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
    });

    return connection;
}

module.exports = {
    getConnection
};
