const { dbConnection } = require('../DB/conexionDB')
const { Producto } = require('../models/models')
const { BadRequest } = require('../utils/errors')


const crearProducto = async (req, res) => {

    await dbConnection()
    const { nombre, ...body } = req.body;

    // const productoDB = await Producto.findOne({ nombre: nombre });

    // if (productoDB) {
    //     throw new BadRequest(`producto: ${nombre} ya registrado`)
    // }
    const data = {
        ...body,
        nombre: nombre.toUpperCase()
    }

    const producto = new Producto(data);

    await producto.save();

    res.status(201).json(producto);

}

const eliminar = async (req, res) => {
    await dbConnection()
    const { id } = req.params;
    const productoEliminado = await Producto.deleteOne({ _id: id })
    res.status(200).json({
        mensaje: "producto eliminado"
    })
}

const consultar = async (req, res) => {
    await dbConnection()

    const productos = await Producto.find()

    res.status(200).json(productos)
}

const actualizar = async (req, res) => {

    const { id } = req.params;
    const { ...data } = req.body;

    if (data.nombre) {
        data.nombre = data.nombre.toUpperCase();
    }

    const producto = await Producto.findByIdAndUpdate(id, data, { new: true });
    //const producto = await Producto.updateOne({ _id: id }, {$set: data})
    //Producto.updateOne()
    //_id object 
    //const producto = await Producto.updateOne({ _id: id }, data)

    res.status(201).json(producto);

}

const inventario = async (req, res ) => {
    await dbConnection()

    const productos = await Producto.find()

    res.status(200).json(productos)
}

const inventarioID = async (req, res ) => {
    await dbConnection()

    const productos = await Producto.find()

    res.status(200).json(productos)
}
const consultarTiemposEntrega = async (req, res ) => {
    await dbConnection()

    const productos = await Producto.find()

    res.status(200).json(productos)
}


module.exports = {
    crearProducto,
    eliminar,
    consultar,
    actualizar,
    inventario,
    inventarioID, 
    consultarTiemposEntrega
}