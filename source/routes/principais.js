const express = require("express");
const router = express.Router();

const principal = require("../controllers/principal");
const autenticacao = require("../controllers/autenticacao");

// Rota principal
router.get("/", principal.getIndex.bind(principal));

// Rotas de Autenticação
router.get("/login", autenticacao.getLogin.bind(autenticacao));
router.post("/login", autenticacao.postLogin.bind(autenticacao));
router.get("/recuperacao-senha", autenticacao.getRecuperacaoSenha.bind(autenticacao));

module.exports = router;
