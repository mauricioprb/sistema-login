function getIndex(req, res) {
    res.render("principal/index", { title: "Home" });
}

module.exports = {
    getIndex
};
