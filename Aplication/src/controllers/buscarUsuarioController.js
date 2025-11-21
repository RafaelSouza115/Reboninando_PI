const buscarUsuarioModel = require("../models/buscarUsuarioModel");

function listar(req, res) {
    buscarUsuarioModel.listar()
        .then(resultado => {
            res.status(200).json(resultado);
            console.log("estou no controller")
        })
        .catch(erro => {
            res.status(500).json(erro);
            console.log("estou no controller erro")
        });
}

module.exports = {
    listar
};
