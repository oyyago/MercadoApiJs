const conexao = require("../../conexaoDB").conexaoDB;
exports.categoriasGetRoute = (req, res) => {
    const id = req.params.id;
    if (id) {
        const c = `	SELECT nome_produto,nome_categoria
        FROM categorias 
        LEFT JOIN produtos 
        ON categorias.categoria_id = produtos.categoria_id
         WHERE categorias.categoria_id =? `;
        conexao.all(c, [id], (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar categoria",
                    erro: err.message
                });
            } else if (row) {
                res.status(200).json({
                    mensagem: "Categoria encontrada",
                    dados: row
                });
            } else {
                res.status(404).json({
                    mensagem: "Categoria não encontrada"
                });
            }
        });
    } else {
        const c = "SELECT * FROM categorias";
        conexao.all(c, (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar categorias",
                    erro: err.message
                });
            } else {
                res.status(200).json({
                    mensagem: "Lista de categorias",
                    dados: row
                });
            }
        });
    }
};
