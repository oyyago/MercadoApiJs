const conexao = require("../../conexaoDB").conexaoDB;

exports.dadosVendaGetRoute = (req, res) => {
    const id = req.query.id;
    if (id) {
        const c = `SELECT vendas.venda_id, produtos.nome_produto, vendas.data_venda, funcionarios.nome AS nome_funcionario, clientes.nome AS nome_cliente, vendas.valor_total
        FROM vendas
        LEFT JOIN PRODxVENDA ON PRODxVENDA.id_VENDA = vendas.venda_id
        LEFT JOIN produtos ON PRODxVENDA.ID_PRODUTO = produtos.produto_id
        LEFT JOIN funcionarios ON vendas.funcionario_id = funcionarios.funcionario_id
        LEFT JOIN clientes ON vendas.cliente_id = clientes.cliente_id
        WHERE vendas.venda_id = ?`;
        conexao.all(c, [id], (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar venda",
                    erro: err.message
                });
            } else if (rows && rows.length > 0) {
                res.status(200).json({
                    mensagem: "Venda encontrada",
                    dados: rows
                });
            } else {
                res.status(404).json({
                    mensagem: "Venda não encontrada"
                });
            }
        });
    } else {
        const c = `SELECT vendas.venda_id, produtos.nome_produto, vendas.data_venda, funcionarios.nome AS nome_funcionario, clientes.nome AS nome_cliente, vendas.valor_total
        FROM vendas
        LEFT JOIN PRODxVENDA ON PRODxVENDA.id_VENDA = vendas.venda_id
        LEFT JOIN produtos ON PRODxVENDA.ID_PRODUTO = produtos.produto_id
        LEFT JOIN funcionarios ON vendas.funcionario_id = funcionarios.funcionario_id
        LEFT JOIN clientes ON vendas.cliente_id = clientes.cliente_id`;
        conexao.all(c, (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar vendas",
                    erro: err.message
                });
            } else {
                res.status(200).json({
                    mensagem: "Lista de vendas",
                    dados: rows
                });
            }
        });
    }
};
