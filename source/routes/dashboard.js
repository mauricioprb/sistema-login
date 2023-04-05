const express = require("express");
const dashboard = require("../controllers/dashboard");
const router = express.Router();

function verificarSessao(req, res, next) {
    if (!req.session.usuario) {
        res.redirect("/login");
    } else {
        next();
    }
}


router.get("/", verificarSessao, dashboard.getDashboard.bind(dashboard));

module.exports = router;
