const router = require("express").Router();
const controller = require("../controller/vendas/main");

router.get("/dadosvenda", controller.dadosVendaGetRoute);

router.get("/vendas", controller.dadosVendaGetRoute);

router.post("/vendas/insert", controller.vendaPostRoute);

router.delete("/vendas/delete", controller.vendasDeleteRoute);

module.exports = router;
