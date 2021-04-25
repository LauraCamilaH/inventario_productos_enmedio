const { Schema, model } = require('mongoose');

const InventarioSchema = Schema({
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    tipo: {
        type: String,
        emun: ['Entrada', 'Salida']

    },
    cantidad: {
        type: Number,

    }
});


module.exports = model('Inventario', ClienteSchema);
