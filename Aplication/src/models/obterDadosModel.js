const database = require("../database/config");

function obter(id) {

    console.log("Obter : ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
         id);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoObterSql = `
       select sum(acertos) * 10 as pontuacao from jogada j
join usuario u on u.id = j.id_usuario WHERE id_usuario = '${id}';`;

    console.log("Obter: Executando a instrução SQL: \n" + instrucaoObterSql);
    return database.executar(instrucaoObterSql);
}

function rank(id){

    console.log(" Rank: ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
         id);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoRankSql = `
       SELECT 
    (
        SELECT COUNT(*) + 1
        FROM (
            SELECT id_usuario, SUM(acertos) * 10 AS total_pontos
            FROM jogada
            GROUP BY id_usuario
        ) AS tabela
        WHERE tabela.total_pontos > SUM(j.acertos) * 10
    ) AS posicao
FROM usuario u
JOIN jogada j ON u.id = j.id_usuario
WHERE u.id = '${id}';`;

    console.log("Rank: Executando a instrução SQL: \n" + instrucaoRankSql);
    return database.executar(instrucaoRankSql);
}


module.exports = {
    obter,
    rank
};
