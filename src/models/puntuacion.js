const { Schema, model } = require('mongoose');

const PuntuacionSchema = Schema({
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    puntuacion: {
        type: String,
        emun: ['1', '2', '3', '4', '5']

    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true

    }
});


module.exports = model('Puntuacion', PuntuacionSchema);
