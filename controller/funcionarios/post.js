const conexao = require("../../conexaoDB").conexaoDB;

exports.funcionariosPostRoute = (req, res) => {
   conexao.run
      (
         `
        INSERT INTO funcionarios(nome, telefone, email, cargo, valor_por_hora, data_contratacao, endereco_id)
        VALUES(?,?,?,?,?,?,?)`,
         [
            req.body.nome,
            req.body.telefone,
            req.body.email,
            req.body.cargo,
            req.body.valor_por_hora,
            req.body.data_contratacao,
            req.body.endereco_id], (err) => {
               if (err)
                  return res.status(500).json({ msg: "erro ao criar " })
            });
   return res.status(201).json({ msg: "criado com sucesso" }
   )
}
