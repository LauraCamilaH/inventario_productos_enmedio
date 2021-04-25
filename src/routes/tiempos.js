const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { consultarTiemposEntrega } = require('../controllers/productos')



router.get('/productos/entrega', asyncHandler (consultarTiemposEntrega));

module.exports = {
    router
}