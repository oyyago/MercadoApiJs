const conexao = require("../../conexaoDB").conexaoDB;
exports.vendasGetRoute = (req, res) => {
    const id = req.query.id;
    if (id) {
        const c = "SELECT * FROM vendas WHERE venda_id = ?";
        conexao.get(c, [id], (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar venda",
                    erro: err.message
                });
            } else if (row) {
                res.status(200).json({
                    mensagem: "Venda encontrada",
                    dados: row
                });
            } else {
                res.status(404).json({
                    mensagem: "Venda não encontrada"
                });
            }
        });
    } else {
        const c = "SELECT * FROM vendas";
        conexao.all(c, (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar vendas",
                    erro: err.message
                });
            } else {
                res.status(200).json({
                    mensagem: "Lista de vendas",
                    dados: row
                });
            }
        });
    }
};
