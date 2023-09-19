const router = require("express").Router();
const controller = require("../controller/clientes/main");

router.get("/clientes", controller.clientesGetRoute);

router.get("/clientes/:id", controller.clientesGetRoute);

router.post("/clientes/insert", controller.clientesPostRoute);

router.patch("/clientes/patch", controller.clientesPatchRoute);

router.delete("/clientes/delete", controller.clientesDeleteRoute);

module.exports = router;
