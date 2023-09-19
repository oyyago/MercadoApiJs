const { conexaoDB } = require("../../conexaoDB");

exports.vendasDeleteRoute = (req, res) => {
   try {
      const venda_id = req.body.venda_id;

      const sql = "DELETE FROM vendas WHERE VENDA_ID = ?";

      conexaoDB.run(sql, [venda_id], function (err) {
         if (err) {
            console.error("Erro ao deletar do banco:", err);
            return res.status(500).json({ error: "Erro ao deletar do banco" });
         }
         
         if (this.changes === 0) {
            console.error(venda_id)
            console.error("Nenhuma linha encontrada para deletar.");
            return res.status(404).json({ error: "Nenhuma linha encontrada para deletar." });
         }

         return res.status(200).json({ message: "Deletado com sucesso" });
      });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
