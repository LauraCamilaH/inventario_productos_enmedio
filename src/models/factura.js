const { Schema, model } = require('mongoose');

const FacturaSchema = Schema({
    numero: {
        type: Number,
        unique: true
    },

    lineas: [
        {
            producto: {
                type: Schema.Types.ObjectId,
                ref: 'Producto',
                required: true
            },
            cantidad: {
                type: Number
            },

            precioUnitario: {
                type: Number
            },
            subtotal: {
                type: Number,
            }
        }
    ],

    total: {
        type: Number
    },

    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
fecha: {
    type: Date
}

});


module.exports = model('Factura', FacturaSchema);
