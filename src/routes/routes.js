const express = require('express');
const app = express();


app.use(require('./productos').router);
app.use(require('./clientes').router);
app.use(require('./estadisticas').router);
app.use(require('./facturas').router);
app.use(require('./inventarios').router);
app.use(require('./puntuacion').router);
app.use(require('./tiempos').router);





//Se exporta app que tiene configurados los métodos HTTP
module.exports = app;

