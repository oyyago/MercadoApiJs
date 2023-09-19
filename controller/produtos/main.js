const { produtosGetRoute } = require("./get");
const { produtosPostRoute } = require("./post");
const { produtosDeleteRoute } =require("./delete");
const { produtosPatchRoute } = require("./patch");

module.exports = {
    produtosGetRoute: produtosGetRoute,
    produtosPostRoute: produtosPostRoute,
    produtosDeleteRoute:produtosDeleteRoute,
    produtosPatchRoute:produtosPatchRoute

}