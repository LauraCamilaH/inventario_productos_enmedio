const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es obligatorio'],
        unique: true
    },
 
    correo: {
        type: String,
        required: [true, 'Correo es obligatorio'],
        unique: true
    },
});


module.exports = model( 'Cliente', ClienteSchema );
