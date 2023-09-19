const conexao = require("../../conexaoDB").conexaoDB;

exports.clientesDeleteRoute = 

   (req, res) => {
      try {
         const clienteId = req.body.id;

         const sql = "DELETE FROM clientes WHERE cliente_id = ?";

         conexao.run(sql, [clienteId], function (err) {
            if (err) {
               console.error("Erro ao deletar do banco:", err);
               return res.status(500).json({ error: "Erro ao deletar do banco" });
            }

            if (this.changes === 0) {
               console.error("Nenhuma linha encontrada para deletar.");
               return res.status(404).json({ error: "Nenhuma linha encontrada para deletar." });
            }

            return res.status(200).json({ message: "Deletado com sucesso" });
         });
      } catch (error) {
         res.status(500).json({ error: error.message });
      }
   };
