const codPostais = require("./cod-postais.data.json");

module.exports = {
  getCodPostaisPorLocalidade,
};

// GET /api/v1/codigos-postais/:cod
function getCodPostaisPorLocalidade(req, res, next) {
  const local = req.params.local;

  const list = [];

  for (const key in codPostais) {
    if (codPostais[key] === local.toUpperCase()) {
      list.push(key);
    }
  }

  return res.status(200).json(list);
}
