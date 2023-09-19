const conexao = require("../../conexaoDB").conexaoDB;

exports.clientesGetRoute = (req, res) => {
    const id = req.params.id; // Agora estamos lendo o ID a partir da URL

    if (id) {
        const c = "SELECT * FROM clientes WHERE cliente_id = ?";
        conexao.get(c, [id], (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar cliente",
                    erro: err.message
                });
            } else if (row) {
                res.status(200).json({
                    mensagem: "Cliente encontrado",
                    dados: row
                });
            } else {
                res.status(404).json({
                    mensagem: "Cliente não encontrado"
                });
            }
        });
    } else {
        const c = "SELECT * FROM clientes";
        conexao.all(c, (err, row) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    mensagem: "Erro ao buscar clientes",
                    erro: err.message
                });
            } else {
                res.status(200).json({
                    mensagem: "Lista de clientes",
                    dados: row
                });
            }
        });
    }
};
