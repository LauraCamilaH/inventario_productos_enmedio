const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { inventario, productosMovimiento} = require('../controllers/inventario_movimientos')
const { BadRequest } = require('../utils/errors')



router.get('/productos/inventario',  asyncHandler (inventario));

//...

router.post('/productos/movimiento/:id', asyncHandler(productosMovimiento));



module.exports = {
    router
}