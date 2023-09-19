const conexao = require("../../conexaoDB").conexaoDB;

exports.clientesPostRoute = (req, res) => { 
        conexao.run(`
        INSERT INTO clientes(nome, telefone, email)
        VALUES(?,?,?)`,
        [
        req.body.nome,
        req.body.telefone,
        req.body.email
        ],(err)=>{
         if(err)
            return res.status(500).json({msg:"erro ao criar "})
     });
        return res.status(201).json({msg:"criado com sucesso"})
    }
 