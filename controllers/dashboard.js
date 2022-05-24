const { user_biodata, } = require("../models");

const showDashboard = (req, res) => {
    user_biodata.findAll().then((data) => {
        res.render("dashboard", { data });
    });
};

module.exports = {
    showDashboard,
};