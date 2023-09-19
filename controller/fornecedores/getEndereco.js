const conexao = require("../../conexaoDB").conexaoDB;
exports.enderecosGetRoute = (req, res) => {
    const id = req.params.id;
    if (id) {
        const c = `	SELECT * FROM enderecos WHERE endereco_id = ?`;
        conexao.all(c, [id], (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar endereco",
                    erro: err.message
                });
            } else if (row) {
                res.status(200).json({
                    mensagem: "endereco não encontrado",
                    dados: row
                });
            } else {
                res.status(404).json({
                    mensagem: "endereco não encontrado"
                });
            }
        });
    } else {
        const c = "SELECT * FROM ENDERECOS";
        conexao.all(c, (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar em endereco",
                    erro: err.message
                });
            } else {
                res.status(200).json({
                    mensagem: "Lista de endereco",
                    dados: row
                });
            }
        });
    }
};