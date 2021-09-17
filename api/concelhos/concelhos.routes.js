const express = require("express");
const router = express.Router();

const ConcelhosController = require("./concelhos.controller.js");

// GET /api/v1/concelhos?distrito=distritoX
router.get("/", ConcelhosController.getConcelhosPorDistrito);
router.get("/:cod", ConcelhosController.getConcelhoPorCodigo);

module.exports = router;
