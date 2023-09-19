const router = require("express").Router();
const controller = require("../controller/funcionarios/main");

router.get("/funcionarios", controller.funcionariosGetRoute);

router.post("/funcionarios/insert", controller.funcionariosPostRoute);

router.delete("/funcionarios/delete", controller.funcionariosDeleteRoute);

router.patch("/funcionarios/patch", controller.funcionariosPatchRoute);

module.exports = router;
