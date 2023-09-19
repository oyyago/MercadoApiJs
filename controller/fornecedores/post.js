const { conexaoDB } = require("../../conexaoDB");

exports.fornecedorPostRoute = (req, res) => {
  const { nome, telefone,email,endereco } = req.body;
  const camposFaltando = [];

  switch (true) {
    case !nome:
      camposFaltando.push("nome");
      break;
    case !telefone:
      camposFaltando.push("telefone");
      break;
    case !email:
      camposFaltando.push("email");
      break;
    case !endereco:
      camposFaltando.push("endereco");
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
    INSERT INTO fornecedores (nome, telefone,email,endereco_id)
    VALUES (?, ?, ?, ?)
    `,
    [nome, telefone, email, endereco],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: "Erro ao adicionar." });
      }

      return res.status(201).json({ msg: `Produto adicionado com sucesso: ${nome}` });
    }
  );
};
