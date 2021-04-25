const { dbConnection } = require('../DB/conexionDB')
const { Factura } = require('../models/models')
const { BadRequest } = require('../utils/errors')


const crear = async (req, res) => {

    await dbConnection()
    const { ...body } = req.body;


    const data = {
        ...body
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