const express = require('express');
const app = express();


//app.use(cors())


const bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json());

app.use(require('./routes/routes'));



const puerto = 3000 
app.listen(puerto, () => {
    console.log(`The server has started on port: ${puerto}`)
});