const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { inventario, inventarioID } = require('../controllers/productos')
const { BadRequest } = require('../utils/errors')



router.get('/productos/inventario',  asyncHandler (inventario));


//...
router.get('/productos/inventario/:referencia', asyncHandler(inventarioID));




module.exports = {
    router
}