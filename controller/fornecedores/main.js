const { fornecedoresGetRoute } = require("./get");
const { fornecedoresDeleteRoute } = require('./delete');
const { fornecedorPatchRoute } = require('./patch');
const { fornecedorPostRoute } = require('./post');
const { enderecosGetRoute } =require('./getEndereco');
module.exports = {
    fornecedoresGetRoute,
    fornecedoresDeleteRoute,
    fornecedorPatchRoute,
    fornecedorPostRoute,
    enderecosGetRoute
}