const router = require("express").Router();
//const rotaPadrao = "/apiMercado/";

router.use(require('./funcionarios'));
router.use(require('./clientes'));
router.use(require('./categorias'));
router.use(require('./vendas'));
router.use(require('./produtos'));
router.use(require('./fornecedores'))

module.exports = router;