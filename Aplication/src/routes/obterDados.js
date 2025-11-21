var express = require("express");
var router = express.Router();

var obterController = require("../controllers/obterDadosController");

router.post("/obterDados",function (req, res){
 obterController.obter(req, res);
});

router.post("/obterRank",function (req, res){
 obterController.rank(req, res);
});

module.exports = router;
