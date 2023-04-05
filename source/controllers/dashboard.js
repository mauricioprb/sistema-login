async function getDashboard(req, res) {
    const usuario = req.session.usuario;
    if (!usuario) {
        res.redirect("/login");
    } else {
        // Renderiza a página do dashboard
        res.render("plataforma/dashboard", { title: "Painel de controle" });
    }
}
module.exports = {
    getDashboard
};
