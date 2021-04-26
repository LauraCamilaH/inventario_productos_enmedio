const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { ventasMes } = require('../controllers/estadisticas')



router.get('/estadisticas', asyncHandler (ventasMes));

module.exports = {
    router
}