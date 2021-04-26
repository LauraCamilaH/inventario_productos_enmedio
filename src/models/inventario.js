const { Schema, model } = require('mongoose');

const InventarioSchema = Schema({
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    tipo: {
        type: String,
        lowercase: true,
        enum: ['entrada', 'salida']
    },
    cantidad: {
        type: Number,
    }
});


module.exports = model('Inventario', InventarioSchema);
