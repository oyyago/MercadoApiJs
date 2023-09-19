const conexao = require("../../conexaoDB").conexaoDB;

exports.funcionariosGetRoute = (req, res) => {
    const id = req.query.id;
    if (id) {
        const c = "SELECT * FROM FUNCIONARIOS WHERE FUNCIONARIO_id = ?";
        conexao.get(c, [id], (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar FUNCIONARIOS",
                    erro: err.message
                });
            } else if (row) {
                res.status(200).json({
                    mensagem: "FUNCIONARIOS encontrado",
                    dados: row
                });
            } else {
                res.status(404).json({
                    mensagem: "FUNCIONARIOS não encontrado"
                });
            }
        });
    } else {
        const c = "SELECT * FROM FUNCIONARIOS";
        conexao.all(c, (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar FUNCIONARIOS",
                    erro: err.message
                });
            } else {
                res.status(200).json({
                    mensagem: "Lista de FUNCIONARIO",
                    dados: row
                });
            }
        });
    }
};

