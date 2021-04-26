const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { inventario, inventarioID,  productosMovimiento} = require('../controllers/inventario_movimientos')
const { BadRequest } = require('../utils/errors')



router.get('/productos/inventario',  asyncHandler (inventario));

//...
router.get('/productos/inventario/:id', asyncHandler(inventarioID));

router.post('/productos/movimiento/:id', asyncHandler(productosMovimiento));



module.exports = {
    router
}