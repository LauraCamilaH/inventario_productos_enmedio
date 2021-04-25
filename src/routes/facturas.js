const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { crear, consultar} = require('../controllers/factura')
const { BadRequest } = require('../utils/errors')


router.post('/facturas', asyncHandler(crear));

router.get('/facturas', asyncHandler (consultar));



module.exports = {
    router
}