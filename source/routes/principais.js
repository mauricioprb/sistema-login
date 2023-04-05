const express = require("express");
const router = express.Router();

const principal = require("../controllers/principal");
const login = require("../controllers/login");
const recuperacaoSenha = require("../controllers/recuperacaoSenha");

// Rota principal
router.get("/", principal.getIndex.bind(principal));

// Rotas de Autenticação
router.get("/login", login.getLogin.bind(login));
router.post("/login", login.postLogin.bind(login));
router.get("/recuperacao-senha", recuperacaoSenha.getRecuperacaoSenha.bind(recuperacaoSenha));
router.post("/recuperacao-senha", recuperacaoSenha.postRecuperacaoSenha.bind(recuperacaoSenha));

module.exports = router;
