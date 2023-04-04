const mysql = require("mysql2/promise");
require("dotenv").config(); // Importa o pacote dotenv para carregar as variáveis de ambiente do arquivo .env

async function getConnection() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });

    return connection;
}

module.exports = {
    getConnection
};
