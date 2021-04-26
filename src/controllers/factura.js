const { dbConnection } = require('../DB/conexionDB')
const { Factura, Inventario } = require('../models/models');
const { BadRequest } = require('../utils/errors')


const crear = async (req, res) => {

    await dbConnection()
    const { lineas, ...body } = req.body;
    const data = { lineas, ...body }
    //const dataMovimiento = [];

    for (const linea of lineas) {
        const dataMovimiento = {
            tipo: "salida",
            producto: linea.producto,
            cantidad: linea.cantidad
        }
        let movimiento = new Inventario(dataMovimiento);
        await movimiento.save();
    }


    const factura = new Factura(data);
    await factura.save();


    res.status(201).json(factura);

}



const consultar = async (req, res) => {
    await dbConnection()

    const facturas = await Factura.find()

    res.status(200).json(facturas);
}





module.exports = {
    crear,
    consultar

}