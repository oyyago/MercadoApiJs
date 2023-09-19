const { dadosVendaGetRoute } = require("./dados_venda");
const { vendasGetRoute } = require("./vendas");
const { vendaPostRoute } = require("./post");
const { vendasDeleteRoute } = require('./delete')

module.exports = {
    dadosVendaGetRoute,
    vendasGetRoute,
    vendaPostRoute,
    vendasDeleteRoute
}