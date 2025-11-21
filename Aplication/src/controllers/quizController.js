var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
       var id = req.body.idSever;
       var quiz = req.body.quizServer;
       var acertos = req.body.acertosServer;
       var erros = req.body.errosServer;
        
    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(id, quiz, acertos, erros)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("foi bb" )
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}