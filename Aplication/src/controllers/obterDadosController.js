const obterModel = require("../models/obterDadosModel");


function obter(req, res) {
    var id = req.body.id;
    console.log("Controller do obter")
    obterModel.obter(id)
        .then(resultado => {
            console.log("Obter: estou no controller")
            res.status(200).json(resultado);

        })
        .catch(erro => {
            res.status(500).json(erro);
            console.log("Obter: estou no controller erro")
        });
}

function rank(req, res) {
    var id = req.body.id;

    console.log("Controller do rank")
    obterModel.rank(id)
        .then(resultado => {
            console.log("Rank: estou no controller")
            res.status(200).json(resultado);

        })
        .catch(erro => {
            res.status(500).json(erro);
            console.log("Rank: estou no controller erro")
        });
}

module.exports = {
    obter,
    rank
};
