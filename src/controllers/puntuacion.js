const { dbConnection } = require('../DB/conexionDB')
const { Puntuacion } = require('../models/models')


const crear = async (req, res) => {

    await dbConnection()
    const { id } = req.params;
    const {  ...body } = req.body;

    const data = {
        
        ...body,
        producto:   id
    }

    const puntuacion = new Puntuacion(data);

    await puntuacion.save();

    res.status(201).json(puntuacion);

}


const consultar = async (req, res ) => {
    await dbConnection()

    const puntuacion = await Puntuacion.aggregate([
        
            { 
                "$group" : { 
                    "_id" : "$producto", 
                    "promedio" : { 
                        "$avg" : "$puntuacion"
                    }
                }
            }, 
            { 
                "$lookup" : { 
                    "from" : "productos", 
                    "localField" : "_id", 
                    "foreignField" : "_id", 
                    "as" : "productos"
                }
            }, 
            { 
                "$project" : { 
                    "idProducto" : "$_id", 
                    "producto" : { 
                        "$arrayElemAt" : [
                            "$productos", 
                            0.0
                        ]
                    }, 
                    "promedio" : 1.0
                }
            }, 
            { 
                "$project" : { 
                    "nombre" : "$producto.nombre", 
                    "promedio" : 1.0
                }
            }
        
    ])

    res.status(200).json(puntuacion)
}




module.exports = {
    crear,
    consultar
}