const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { crear, consultar } = require('../controllers/puntuacion')


router.get('/productos/puntuacion', asyncHandler (consultar));

router.post('/productos/puntuacion/:id', asyncHandler(crear));




module.exports = {
    router
}