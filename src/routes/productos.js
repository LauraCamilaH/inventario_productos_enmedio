const { dbConnection } = require("../DB/conexionDB");

const router = require("express").Router();


router.post("/productos", async(req, res) => {
    await dbConnection()
    res.status(200).json({
        mensaje: "productos"
    });
});

router.delete("/productos", async(req, res) => {
    res.status(200).json({
        mensaje: "productos"
    });
}); 

router.put("/productos", async(req, res) => {
    
    res.status(200).json({
        mensaje: "productos"
    });
}); 

//...
router.get("/productos", async(req, res) => {
    res.status(200).json({
        mensaje: "productos"
    });
}); 


module.exports = { router };