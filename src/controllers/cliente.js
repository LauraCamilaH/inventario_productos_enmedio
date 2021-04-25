const { dbConnection } = require('../DB/conexionDB')
const { Cliente } = require('../models/models')
const { BadRequest } = require('../utils/errors')


const crear = async (req, res) => {

    await dbConnection()
    const { nombre, ...body } = req.body;

    const data = {
        ...body,
        nombre: nombre.toUpperCase()
    }

    const cliente = new Cliente(data);

    await cliente.save();

    res.status(201).json(cliente);

}


const consultar = async (req, res) => {
    await dbConnection()

    const clientes = await Cliente.find()

    res.status(200).json(clientes)
}

const clientesFrecuentes = async (req, resa) => {
    await dbConnection()

    const clientes = await Cliente.find()

    res.status(200).json(clientes)
}



module.exports = {
    crear,
    consultar,
    clientesFrecuentes

}