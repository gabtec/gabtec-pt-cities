const distritos = require("./distritos.data.js");

module.exports = {
  getDistritos,
  getDistritoPorCodigo,
};

// GET /api/v1/distritos?out=array
// if no 'out' param, will return all data object
function getDistritos(req, res, next) {
  if (req.query && req.query.out && req.query.out === "array") {
    res.status(200).json(distritos.map((it) => it.desc));
  } else {
    res.status(200).json(distritos);
  }
}

// GET /api/v1/distritos/:cod
function getDistritoPorCodigo(req, res, next) {
  const codigo = Number(req.params.cod);
  let distrito;

  const loops = distritos.length;

  for (let i = 0; i < loops; i++) {
    if (distritos[i].cod === codigo) {
      distrito = distritos[i].desc;
      break;
    }
  }

  distrito = distrito ? distrito : "Not found!";
  // return distrito ? distrito : "Not found!";
  res.status(200).json(distrito);
}
