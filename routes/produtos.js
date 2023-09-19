const router = require("express").Router();
const controller = require("../controller/produtos/main");

router.get("/produtos", controller.produtosGetRoute);

router.get("/produtos/:id", controller.produtosGetRoute);

router.post("/produtos/insert", controller.produtosPostRoute);

router.delete("/produtos/delete", controller.produtosDeleteRoute);

router.patch("/produtos/patch", controller.produtosPatchRoute);

module.exports = router;
