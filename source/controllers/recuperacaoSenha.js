const { recuperarSenha } = require("../models/recuperacaoSenha");

async function getRecuperacaoSenha(req, res) {
    res.render("autenticacao/recuperacao-senha", { title: "Recuperação de Senha" });
}

async function postRecuperacaoSenha(req, res) {
    const { email } = req.body;

    try {
        const resultadoRecuperarSenha = await recuperarSenha(email);

        if (resultadoRecuperarSenha.success) {
            res.redirect("/login");
        } else {
            res.render("autenticacao/recuperacao-senha", {
                title: "Recuperação de Senha",
                erro: resultadoRecuperarSenha.message,
            });
        }
    } catch (err) {
        console.log(err);
        res.render("autenticacao/recuperacao-senha", {
            title: "Recuperação de Senha",
            erro: "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
        });
    }
}

module.exports = {
    getRecuperacaoSenha,
    postRecuperacaoSenha
};
