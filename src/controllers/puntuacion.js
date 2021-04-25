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

    const puntuacion = await Puntuacion.find()

    res.status(200).json(puntuacion)
}




module.exports = {
    crear,
    consultar
}