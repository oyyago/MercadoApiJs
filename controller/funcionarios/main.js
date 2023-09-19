const { funcionariosGetRoute } = require("./get");
const { funcionariosPostRoute } = require("./post");
const {funcionariosDeleteRoute} = require("./delete");
const { funcionariosPatchRoute } = require("./patch");
module.exports = {
    funcionariosGetRoute,
    funcionariosPostRoute,
    funcionariosDeleteRoute,
    funcionariosPatchRoute
}