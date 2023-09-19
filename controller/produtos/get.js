const conexao = require("../../conexaoDB").conexaoDB;

exports.produtosGetRoute = (req, res) => {
    const id = req.params.id;
    if (id) {
        const c = `SELECT produto_id, nome_produto, preco_unidade, nome, nome_categoria,estoque
        FROM produtos
        LEFT JOIN fornecedores ON fornecedores.fornecedor_id= produtos.fornecedor_id
        LEFT JOIN categorias ON categorias.categoria_id= produtos.categoria_id
        WHERE produtos.produto_id= ?
		`;
        conexao.get(c, [id], (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar produto",
                    erro: err.message
                });
            } else if (row) {
                res.status(200).json({
                    mensagem: "produto encontrado",
                    dados: row
                });
            } else {
                res.status(404).json({
                    mensagem: "produto não encontrado"
                });
            }
        });
    } else {
        const c = `SELECT PRODUTO_id,nome_produto, preco_unidade, nome, nome_categoria,estoque
        FROM produtos
        LEFT JOIN fornecedores ON fornecedores.fornecedor_id= produtos.fornecedor_id
        LEFT JOIN categorias ON categorias.categoria_id= produtos.categoria_id
        `;
        conexao.all(c, (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar produtos",
                    erro: err.message
                });
            } else {
                res.status(200).json({
                    mensagem: "Lista de produtos",
                    dados: row
                });
            }
        });
    }
};

