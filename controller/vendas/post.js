const { conexaoDB } = require("../../conexaoDB");

async function verificaExistenciaProduto(idProduto) {
    return new Promise((resolve, reject) => {
        conexaoDB.get(
            "SELECT * FROM produtos WHERE produto_id = ?",
            [idProduto],
            (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            }
        );
    });
}
exports.vendaPostRoute = async (req, res) => {
    const venda = {
        data_venda: req.body.data_venda,
        funcionario_id: req.body.funcionario_id,
        cliente_id: req.body.cliente_id,
        valor_total: req.body.valor_total
    };
    conexaoDB.run(
        `
        INSERT INTO vendas (data_venda, funcionario_id, cliente_id, valor_total)
        VALUES (?, ?, ?, ?)
        `,
        [
            venda.data_venda,
            venda.funcionario_id,
            venda.cliente_id,
            venda.valor_total,
        ],
        function (err) {
            if (err) {
                console.error(err);
                return res.status(500).json({ msg: "Erro ao criar venda" });
            }

            const id_venda = this.lastID;

            const produtos = req.body.produtos;
            console.log(produtos);
            for (const prop in produtos) {
                const idProduto = Number(prop);
                const quantidade = produtos[prop];
                const produtoExistente = verificaExistenciaProduto(idProduto);

                if (!produtoExistente) {
                    return res.status(400).json({ msg: `Produto com ID ${idProduto} não encontrado` });
                }

                const inserirProdutoVenda = [
                    id_venda, 
                    idProduto,
                    quantidade
                ];
                conexaoDB.run(
                    `INSERT INTO PRODxVENDA (id_venda, id_produto, quantidade) VALUES (?, ?, ?)`,
                    inserirProdutoVenda,
                    (err) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).json({ msg: "Erro ao inserir produto na venda" });
                        }
                    }
                );
            }

            return res.status(201).json({ msg: "Venda criada com sucesso" });
        }
    );
};
