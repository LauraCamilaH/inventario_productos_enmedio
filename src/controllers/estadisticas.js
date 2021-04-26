const { dbConnection } = require('../DB/conexionDB')
const { Inventario, Factura } = require('../models/models')







const ventasMes = async (req, res) => {
    await dbConnection()

    const ventas = await Factura.aggregate([
        {
            "$group": {
                "_id": {
                    "mes": { "$month": "$fecha" },
                    "año": { "$year": "$fecha" }
                },
            "total ventas":{"$sum": "$total"}
            }
        }

    ])

    res.status(200).json(ventas)
}



module.exports = {
    ventasMes

}