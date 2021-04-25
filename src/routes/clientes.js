const router = require("express").Router();
const { asyncHandler } = require('../utils/utils')
const { clientesFrecuentes, crear, consultar} = require('../controllers/cliente')
const { BadRequest } = require('../utils/errors')



router.get("/clientes/frecuentes", asyncHandler (
 clientesFrecuentes
)); 


//..
router.post("/clientes", asyncHandler (crear));


router.get("/clientes",  asyncHandler (consultar)); 


module.exports = { router };