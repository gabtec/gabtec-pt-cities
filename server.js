const express = require("express");
const app = express();

let PORT;
const args = process.argv.slice(2);

if (args.length > 0) {
  console.log("StandAlone API Mode...");
  PORT = Number(args[0]);
}

if (isNaN(PORT)) {
  console.log("Deve indicar um número de PORTO válido!");
  process.exit(2);
}
// const helmet = require("helmet");
// const cors = require("cors");

// const PORT = 4002;

module.exports = app;

// app.use(cors());
// app.use(helmet());
app.use(express.json());

/*
     ____   ___  _   _ _____ _____ ____  
    |  _ \ / _ \| | | |_   _| ____/ ___| 
    | |_) | | | | | | | | | |  _| \___ \ 
    |  _ <| |_| | |_| | | | | |___ ___) |
    |_| \_\\___/ \___/  |_| |_____|____/ 
 */

// router handler modules
const DistritosEndpoints = require("./api/distritos/distritos.routes");
const ConcelhosEndpoints = require("./api/concelhos/concelhos.routes");
const LocalidadesEndpoints = require("./api/localidades/localidades.routes");
const CodigosPostaisEndpoints = require("./api/codigos-postais/cod-postais.routes");

// ROUTES
app.use("/api/v1/distritos", DistritosEndpoints);
app.use("/api/v1/concelhos", ConcelhosEndpoints);
app.use("/api/v1/localidades", LocalidadesEndpoints);
app.use("/api/v1/codigos-postais", CodigosPostaisEndpoints);

if (PORT) {
  app.listen(PORT, function () {
    console.log(`Simple Server listening on port ${PORT}.`);
  });
}
