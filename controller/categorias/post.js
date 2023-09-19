
const conexao = require("../../conexaoDB").conexaoDB;
exports.categoriaPostRoute = (req, res) => { 
        conexao.run(`
        INSERT INTO categorias(nome_categoria)
        values(?)`,
        [
        req.body.nome],(err)=>{
         if(err)
            return res.status(500).json({msg:"erro ao criar "})
     });
        return res.status(201).json({msg:"criado com sucesso"})
    };

 