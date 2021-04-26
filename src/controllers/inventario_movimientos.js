const { dbConnection } = require('../DB/conexionDB')
const { Producto, Inventario } = require('../models/models')

const inventario = async (req, res) => {
    await dbConnection()

    const inventario = await Inventario.aggregate([
        {
            "$group": {
                "_id": "$producto",
                "entradas": {
                    "$sum": {
                        "$cond": {
                            "if": {
                                "$eq": [
                                    "$tipo",
                                    "Entrada"
                                ]
                            },
                            "then": "$cantidad",
                            "else": 0.0
                        }
                    }
                },
                "salidas": {
                    "$sum": {
                        "$cond": {
                            "if": {
                                "$eq": [
                                    "$tipo",
                                    "salida"
                                ]
                            },
                            "then": "$cantidad",
                            "else": 0.0
                        }
                    }
                }
            }
        },
        {
            "$addFields": {
                "total": {
                    "$subtract": [
                        "$entradas",
                        "$salidas"
                    ]
                }
            }
        }

    ])

    res.status(200).json(inventario)
}



const productosMovimiento = async (req, res) => {
    await dbConnection()
    const { id } = req.params;

    const { tipo_movimiento, ...body } = req.body;


    const data = {
        producto: id,
        tipo: tipo_movimiento,
        ...body
    }

    const movimiento = new Inventario(data);

    await movimiento.save();

    res.status(201).json(movimiento);
}

module.exports = {
    inventario,
    productosMovimiento
}