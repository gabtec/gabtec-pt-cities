const express = require("express");
const router = express.Router();

const CodigosPostaisController = require("../codigos-postais/cod-postais.controller.js");

// GET /api/v1/codigos-postais/:local
router.get("/:local", CodigosPostaisController.getCodPostaisPorLocalidade);

module.exports = router;
