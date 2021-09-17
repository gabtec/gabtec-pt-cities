const express = require("express");
const router = express.Router();

const LocalidadesController = require("../localidades/localidades.controller.js");

// GET /api/v1/localidades/:cod
router.get("/:cod", LocalidadesController.getLocalidadePorCodPostal);

module.exports = router;
