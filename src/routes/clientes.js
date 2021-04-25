const { dbConnection } = require("../DB/conexionDB");

const router = require("express").Router();


router.get("/clientes/frecuentes", async(req, res) => {
    await dbConnection()
    res.status(200).json({
        mensaje: "clientes"
    });
}); 


//..
router.post("/clientes", async(req, res) => {
    await dbConnection()
    res.status(200).json({
        mensaje: "clientes"
    });
});


router.get("/clientes", async(req, res) => {
    await dbConnection()
    res.status(200).json({
        mensaje: "clientes"
    });
}); 


module.exports = { router };