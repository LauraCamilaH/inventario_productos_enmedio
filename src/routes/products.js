const router = require("express").Router();


router.post("/products", async(req, res) => {

    res.status(200).json({
        mensaje: "productos"
    })


});


router.get('/producto/autocompletar', async(req, res) => { 
 

});


router.get('/producto/:referencia', async(req, res) => { // cuando se hace la peticion, se ejecuta la segunda funcion
    

});


router.patch('/producto/:referencia', async(req, res) => {
 

});


router.post('/actualizarvariosproducto', async(req, res) => {

});



router.post('/productos/:referencia([0-9]+)/movimiento', async(req, res) => {
});


module.exports = { router };