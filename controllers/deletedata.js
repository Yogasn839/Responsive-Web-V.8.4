const { user_biodata } = require("../models");

const deletedataUser = (req, res) => {
    user_biodata
        .destroy({
            where: {
                id: req.params.id,
            },
        })
        .then(() => {
            res.redirect("/dashboard");
        })
        .catch((err) => {
            res.send(err);
        });
};

module.exports = {
    deletedataUser,
};