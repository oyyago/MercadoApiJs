const { conexaoDB } = require("../../conexaoDB");

exports.fornecedorPatchRoute = (req, res) => {
   const { nome, telefone, email, endereco_id, fornecedor_id } = req.body;

   const sql = `
      UPDATE fornecedores
      SET nome = ?,
          telefone = ?,
          email = ?,
          endereco_id = ?
      WHERE fornecedor_id = ?;
   
   `;

   conexaoDB.run(
      sql,
      [nome, telefone, email, endereco_id, fornecedor_id],
      (err) => {
         if (err) {
            console.error("Erro ao atualizar:", err.message);
            return res.status(500).json({
               msg: "Erro ao atualizar",
               errMsg: err.message,
            });
         } else {
            console.log("Atualizado com sucesso");
            return res.status(201).json({ msg: "Atualizado com sucesso" });
         }
      }
   );
};
