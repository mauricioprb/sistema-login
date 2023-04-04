async function getDashboard(req, res) {
    res.render("plataforma/dashboard", { title: "Painel de controle" });
}

module.exports = {
    getDashboard
};
