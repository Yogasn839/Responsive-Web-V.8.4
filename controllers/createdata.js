const { user_biodata } = require("../models");

const createdataUser = (req, res) => {
    user_biodata.create({
            nama: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            usia: req.body.usia,
            alamat: req.body.alamat,
        })
        .then(() => {
            res.redirect("/dashboard");
        })
        .catch((err) => {
            res.send(err);
        });
};

const createdataUserDisplay = (req, res) => {
    res.render("createdata");
};

module.exports = {
    createdataUserDisplay,
    createdataUser,
};