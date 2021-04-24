const express = require('express');
const app = express();


app.use(require('./products').router);


//Se exporta app que tiene configurados los métodos HTTP
module.exports = app;

