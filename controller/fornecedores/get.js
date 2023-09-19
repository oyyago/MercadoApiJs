const conexao = require("../../conexaoDB").conexaoDB;
exports.fornecedoresGetRoute = (req, res) => {
    const id = req.params.id;
    if (id) {
        const c = `	
        SELECT
            fornecedores.fornecedor_id,
            fornecedores.nome,
            fornecedores.telefone,
            fornecedores.email,
            fornecedores.endereco_id,
            enderecos.rua,
            enderecos.bairro
        FROM
            fornecedores
        LEFT JOIN
            enderecos ON fornecedores.endereco_id = enderecos.endereco_id
        WHERE
            fornecedores.fornecedor_id = ?`
        conexao.all(c, [id], (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar forncedore",
                    erro: err.message
                });
            } else if (row) {
                res.status(200).json({
                    mensagem: "forncedores não encontrado",
                    dados: row
                });
            } else {
                res.status(404).json({
                    mensagem: "forncedores não encontrado"
                });
            }
        });
    } else {
        const c = `SELECT fornecedores.fornecedor_id, fornecedores.nome, fornecedores.telefone, fornecedores.email, fornecedores.endereco_id, 
        enderecos.rua, enderecos.bairro 
        from
         fornecedores 
        left join 
        enderecos 
        on fornecedores.endereco_id = enderecos.endereco_id
        `;
        conexao.all(c, (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar em forncedores",
                    erro: err.message
                });
            } else {
                res.status(200).json({
                    mensagem: "Lista de forncedores",
                    dados: row
                });
            }
        });
    }
};
