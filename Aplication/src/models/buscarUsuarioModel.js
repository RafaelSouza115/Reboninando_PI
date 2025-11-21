const database = require("../database/config");

function listar() {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT 
    u.id ,
    u.nome ,
   SUM(j.acertos) * 10  AS pontuacao
FROM usuario u
JOIN jogada j ON u.id = j.id_usuario
GROUP BY u.id, u.nome
ORDER BY pontuacao DESC
LIMIT 10;
       `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar
};
