const router = require("express").Router();
const controller = require("../controller/fornecedores/main");

router.get("/fornecedores", controller.fornecedoresGetRoute);
router.get("/fornecedores/:id", controller.fornecedoresGetRoute);
router.delete('/fornecedores/delete', controller.fornecedoresDeleteRoute);
router.post("/fornecedor/post", controller.fornecedorPostRoute);
router.patch("/fornecedores/patch", controller.fornecedorPatchRoute);
router.get('/enderecos', controller.enderecosGetRoute);
router.get('/enderecos/:id', controller.enderecosGetRoute);

module.exports = router;
