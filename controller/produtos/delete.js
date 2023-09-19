const { conexaoDB } = require("../../conexaoDB");

exports.produtosDeleteRoute = 

   (req, res) => {
      try {
         const produto_id = req.body.id;

         const sql = "DELETE FROM produtos WHERE PRODUTO_id = ?";

         conexaoDB.run(sql, [produto_id], function (err) {
            if (err) {

               console.error("Erro ao deletar do banco:", err);
               return res.status(500).json({ error: "Erro ao deletar do banco" });
            }
            
            if (this.changes === 0) {               
               console.error(produto_id)
               console.error("Nenhuma linha encontrada para deletar.");
               return res.status(404).json({ error: "Nenhuma linha encontrada para deletar." });
            }

            return res.status(200).json({ message: "Deletado com sucesso" });
         });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   };
