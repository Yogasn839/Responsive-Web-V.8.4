const { user_biodata } = require("../models");

const updatedataUser = (req, res) => {
    user_biodata
        .update({
            nama: req.body.nama,
            jenis_kelamin: req.body.jenis_kelamin,
            usia: req.body.usia,
            alamat: req.body.alamat,
        }, { where: { id: req.params.id } })
        .then(() => {
            res.redirect("/dashboard");
        })
        .catch((err) => {
            res.send(err);
        });
};

const updatedataUserDisplay = (req, res) => {
    user_biodata.findOne({ where: { id: req.params.id } }).then((data) => {
        res.render("updatedata", { data });
    });
};

module.exports = {
    updatedataUserDisplay,
    updatedataUser,
};