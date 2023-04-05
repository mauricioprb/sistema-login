const express = require("express");
const router = express.Router();

const principal = require("../controllers/principal");
const login = require("../controllers/login");

// Rota principal
router.get("/", principal.getIndex.bind(principal));

// Rotas de Autenticação
router.get("/login", login.getLogin.bind(login));
router.post("/login", login.postLogin.bind(login));
router.get("/recuperacao-senha", login.getRecuperacaoSenha.bind(login));

module.exports = router;
