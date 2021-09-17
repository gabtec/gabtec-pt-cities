const codPostais = require("../codigos-postais/cod-postais.data_v3.json");

module.exports = {
  getLocalidadePorCodPostal,
};

// GET /api/v1/codigos-postais/:cod
function getLocalidadePorCodPostal(req, res, next) {
  const pattern = /^\d{4}-\d{3}?$/;

  const cod = req.params.cod;

  if (!cod.match(pattern)) {
    return res
      .status(400)
      .json({ message: "Código Postal deve respeitar o padrão NNNN-NNN." });
  }

  const result = [];

  for (const key in codPostais) {
    // console.log(key);
    if (key.substring(0, 8) === cod) {
      result.push(codPostais[key]);
    }
  }
  return res.status(200).json(result);
}
