const { clientesGetRoute } = require("./get");
const { clientesPostRoute } = require("./post");
const { clientesPatchRoute } = require('./patch');
const { clientesDeleteRoute } = require('./delete');
module.exports = {
    clientesGetRoute: clientesGetRoute,
    clientesPostRoute: clientesPostRoute,
    clientesPatchRoute: clientesPatchRoute,
    clientesDeleteRoute: clientesDeleteRoute

}