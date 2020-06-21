const Tortas = require("../models/tortas.model.js");



exports.findAll = (req, res) => {
    Tortas.getAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Error mensaje."
        });
        else res.send(data);
    });
    };

