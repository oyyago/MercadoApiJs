const router = require("express").Router();
const controller = require("../controller/categorias/main");

router.get("/categorias", controller.categoriasGetRoute);

router.get("/categorias/:id", controller.categoriasGetRoute);


router.post('/categorias/insert', controller.categoriaPostRoute);

module.exports = router;

