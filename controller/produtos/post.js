const { conexaoDB } = require("../../conexaoDB");

exports.produtosPostRoute = (req, res) => {
  const { nome, preco, fornecedor, categoria, estoque } = req.body;
  const camposFaltando = [];

  switch (true) {
    case !nome:
      camposFaltando.push("nome");
      break;
    case !preco:
      camposFaltando.push("preco");
      break;
    case !fornecedor:
      camposFaltando.push("fornecedor");
      break;
    case !categoria:
      camposFaltando.push("categoria");
      break;
    case !estoque:
      camposFaltando.push("estoque");
      break;
    default:
      break;
  }

  if (camposFaltando.length > 0) {
    return res.status(400).json({
      msg: `Campos obrigatórios faltando: ${camposFaltando.join(", ")}`,
    });
  };
  conexaoDB.run(
    `
    INSERT INTO produtos (nome_produto, preco_unidade, fornecedor_id, categoria_id, estoque)
    VALUES (?, ?, ?, ?, ?)
    `,
    [nome, preco, fornecedor, categoria, estoque],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Erro ao criar o produto" });
      }

      return res.status(201).json({ msg: `Produto criado com sucesso: ${nome}` });
    }
  );
};
