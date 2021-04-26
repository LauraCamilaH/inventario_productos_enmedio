const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { crearProducto, eliminar, consultar, actualizar} = require('../controllers/productos')
const { BadRequest } = require('../utils/errors')


router.post("/productos", asyncHandler( async(req, res, next) => {
   await crearProducto(req, res)
}));

router.delete("/productos/:id", asyncHandler(eliminar)); 

router.put("/productos/:id", asyncHandler (actualizar)); 

//...
router.get("/productos", asyncHandler ( async(req, res, next) => {
   await consultar(req, res)
})); 

router.get('/',  asyncHandler (async(req, res, next)=>{
const informacion = "Desarrollo solución backend empresa XYZ"
   res.json({Data: informacion})
}));

module.exports = { router };