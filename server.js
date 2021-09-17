const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

const PORT = 4002;

module.exports = app;

app.use(cors());
app.use(helmet());
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

// ROUTES
app.use("/api/v1/distritos", DistritosEndpoints);
app.use("/api/v1/concelhos", ConcelhosEndpoints);

app.listen(PORT, function () {
  console.log(`Simple Server listening on port ${PORT}.`);
});
