const tools = require("../../utils/index");
const concelhos = require("./concelhos.data.js");

module.exports = {
  getConcelhosPorDistrito,
  getConcelhoPorCodigo,
};

// GET /api/v1/concelhos?distrito=distX
function getConcelhosPorDistrito(req, res, next) {
  if (!req.query.distrito) {
    return res.status(400).json({ message: "Deve indicar o distrito!" });
  }

  const district = req.query.distrito;

  if (typeof district !== "string")
    return res.status(400).json({ message: "Not found!" });

  const dist = tools.ensureUpperFirst(district);
  const city = concelhos[dist] || [];

  if (city.length < 1) return res.status(400).json({ message: "Not found!" });

  const result = city.map((it) => it.desc);

  return result.length > 0
    ? res.status(200).json(result)
    : res.status(400).json({ message: "Not found!" });
}

// GET /api/v1/concelhos/:cod
function getConcelhoPorCodigo(req, res, next) {
  const codigo = Number(req.params.cod);
  let concelho;

  for (const key in concelhos) {
    // console.log(key);
    const loops = concelhos[key].length;

    for (let i = 0; i < loops; i++) {
      // console.log(concelhos[key][i].desc);
      if (concelhos[key][i].cod === codigo) {
        concelho = concelhos[key][i].desc;
        break;
      }
    }
  }

  concelho = concelho ? concelho : "Not found!";
  // return concelho ? concelho : "Not found!";
  res.status(200).json(concelho);
}
