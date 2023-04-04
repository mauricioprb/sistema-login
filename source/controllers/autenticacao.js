const autenticacao = require("../models/autenticacao");

async function getLogin(req, res) {
    res.render("autenticacao/login", { title: "Faça Login na Plataforma" });
}

async function getRecuperacaoSenha(req, res) {
    res.render("autenticacao/recuperacao-senha", { title: "Recuperação de Senha" });
}

async function postLogin(req, res) {
    const { email, senha } = req.body;

    try {
        if (await autenticacao.autenticarUsuario(email, senha)) {
            const usuario = await autenticacao.criarSessao(email);
            req.session.usuario = usuario;
            res.redirect("/dashboard");
        } else {
            res.render("autenticacao/login", {
                title: "Faça Login na Plataforma",
                erro: "E-mail ou senha incorretos.",
            });
        }
    } catch (err) {
        console.log(err);
        res.render("autenticacao/login", {
            title: "Faça Login na Plataforma",
            erro: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
        });
    }
}

module.exports = {
    getLogin,
    getRecuperacaoSenha,
    postLogin,
};
