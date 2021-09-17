const express = require("express");
const router = express.Router();

const DistritosController = require("./distritos.controller.js");

// GET /api/v1/servicos?from=instX
router.get("/", DistritosController.getDistritos);
router.get("/:cod", DistritosController.getDistritoPorCodigo);

module.exports = router;
