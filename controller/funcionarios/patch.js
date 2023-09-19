const { conexaoDB } = require("../../conexaoDB");

exports.funcionariosPatchRoute = (req, res) => {
   try {
      conexaoDB.run(
         `
         UPDATE funcionarios 
         SET nome = ?, telefone = ?,
             email = ?, cargo = ?,
             valor_por_hora = ?,
             endereco_id = ?
         WHERE funcionario_id = ?;
         
         `,
         [
            req.body.nome,
            req.body.telefone,
            req.body.email,
            req.body.cargo,
            req.body.valor_por_hora,
            req.body.endereco_id,
            req.body.id
         ],
         (err) => {
            if (err) {
               throw err; 
            } else {
               return res.status(201).json({ msg: "atualizado com sucesso" });
            }
         }
      );
   } catch (err) {
      return res.status(500).json({
         msg: "erro ao atualizar",
         errMsg: err.message
      });
   }
}
