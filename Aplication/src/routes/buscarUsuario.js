var express = require("express");
var router = express.Router();

var buscarUsuarioController = require("../controllers/buscarUsuarioController");

router.get("/listar",function (req, res){
 buscarUsuarioController.listar(req, res);
});

module.exports = router;
