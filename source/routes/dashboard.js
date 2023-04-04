const express = require("express");
const dashboard = require("../controllers/dashboard");

const router = express.Router();

router.get("/", dashboard.getDashboard.bind(dashboard));

module.exports = router;
