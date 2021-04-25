const { dbConnection } = require("../DB/conexionDB");

const router = require("express").Router();


router.get('producto/inventario', async (req, res)=>{

});


//...
router.get('producto/inventario/:referencia', async (req, res)=>{

});



module.exports = {
    router
}