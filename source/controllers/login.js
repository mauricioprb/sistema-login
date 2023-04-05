const login = require("../models/login");

async function getLogin(req, res) {
    res.render("autenticacao/login", { title: "Faça Login na Plataforma" });
}

async function postLogin(req, res) {
    const { email, senha } = req.body;

    try {
        const resultadoAutenticacao = await login.autenticarUsuario(email, senha);
        if (resultadoAutenticacao.success) {
            const usuario = await login.criarSessao(email);
            req.session.usuario = usuario;
            res.redirect("/dashboard");
        } else {
            res.render("autenticacao/login", {
                title: "Faça Login na Plataforma",
                erro: resultadoAutenticacao.message,
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
    postLogin
};
