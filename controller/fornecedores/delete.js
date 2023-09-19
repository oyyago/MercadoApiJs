const { conexaoDB } = require("../../conexaoDB");

exports.fornecedoresDeleteRoute = (req, res) => {
      try {
         const fornecedor_id = req.body.fornecedor_id;

         const sql = "DELETE from fornecedores where fornecedor_id = ?";

         conexaoDB.run(sql, [fornecedor_id], function (err) {
            if (err) {

               console.error("Erro ao deletar do banco:", err);
               return res.status(500).json({ error: "Erro ao deletar do banco" });
            }
            
            if (this.changes === 0) {               
               console.error(fornecedor_id)
               console.error("Nenhuma linha encontrada para deletar.");
               return res.status(404).json({ error: "Nenhuma linha encontrada para deletar." });
            }
            return res.status(200).json({ message: "Deletado com sucesso" });
         });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   };
