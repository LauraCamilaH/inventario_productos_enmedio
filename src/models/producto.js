const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es obligatorio'],
        unique: true
    },

    precio: {
        type: Number,
        default: 0
    },

    descripcion: {
        type: String
    },
    tiempo_entrega: {
        type: String,
        defult: 1
    },

});


module.exports = model('Producto', ProductoSchema);
