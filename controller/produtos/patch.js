const { conexaoDB } = require("../../conexaoDB");

exports.produtosPatchRoute = (req, res) => {
   try {
      conexaoDB.run(
         `
         UPDATE produtos
         SET nome_produto = ? , preco_unidade = ? ,
         fornecedor_id = ?, categoria_id = ?
         WHERE produto_id = ? 
         `,
         [
            req.body.nome,
            req.body.preco,
            req.body.fornecedor_id,
            req.body.categoria_id,
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
