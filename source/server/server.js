const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");

require('dotenv').config();

const principais = require("../routes/principais");
const dashboard = require("../routes/dashboard")

function iniciarServidor() {
    const app = express();

    // Caminho relativo para os arquivos estáticos
    app.use(express.static("public"));

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }));

    // Configurando middlewares
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    // Definindo template engine
    app.engine("hbs", handlebars.engine({ defaultLayout: "main", extname: "hbs" }));
    app.set("view engine", "hbs");
    app.set("views", "./source/views");


    // Definindo rotas
    app.use("/", principais); // Rotas principais
    app.use("/dashboard", dashboard); // Rotas dashboard

    // Iniciando o servidor
    const PORT = 3250;
    app.listen(PORT, () => {
        console.log("Servidor iniciado na url: http://localhost:3000/login");
    });
}

module.exports = iniciarServidor;
