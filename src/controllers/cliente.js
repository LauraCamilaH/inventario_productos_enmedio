const { dbConnection } = require('../DB/conexionDB')
const { Cliente, Factura } = require('../models/models')
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

const clientesFrecuentes = async (req, res) => {
    await dbConnection()

    const clientes = await Factura.aggregate(
        [
            { 
                "$group" : { 
                    "_id" : "$cliente", 
                    "cantidad" : { 
                        "$sum" : 1.0
                    }
                }
            }, 
            { 
                "$lookup" : { 
                    "from" : "clientes", 
                    "localField" : "_id", 
                    "foreignField" : "_id", 
                    "as" : "clientes"
                }
            }, 
            { 
                "$project" : { 
                    "idCliente" : "$_id", 
                    "cliente" : { 
                        "$arrayElemAt" : [
                            "$clientes", 
                            0.0
                        ]
                    }, 
                    "cantidad_compras" : "$cantidad"
                }
            }, 
            { 
                "$project" : { 
                    "nombre" : "$cliente.nombre", 
                    "cantidad_compras" : "$cantidad_compras"
                }
            }
        ]
    )

    res.status(200).json(clientes)
}



module.exports = {
    crear,
    consultar,
    clientesFrecuentes

}