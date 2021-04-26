const express = require('express');
const app = express();
require('dotenv').config();
//app.use(cors())


//const bodyParser = require('body-parser')
const { handleErrorsMiddleware } = require('./middleware/handleErrors');

//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json());
app.use(express.json());



app.use(require('./routes/routes'));


app.use(handleErrorsMiddleware);
const puerto = process.env.PORT
app.listen(puerto, () => {
    console.log(`The server has started on port: ${puerto}`)
});