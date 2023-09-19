const conexao = require("../../conexaoDB").conexaoDB;

exports.clientesPatchRoute = (req, res) => {
   conexao.run(`
        UPDATE clientes
        SET nome = ?
        WHERE cliente_id = ?
        `,
      [
         req.body.nome,
         req.body.id
      ], (err) => {
         if (err)
            return res.status(500).json({ 
               msg: "erro ao criar ",
               errMsg: err.message 
            })
      });
   return res.status(201).json({ msg: "criado com sucesso" })
}
