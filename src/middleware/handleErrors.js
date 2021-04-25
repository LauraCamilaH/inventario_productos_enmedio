const { GeneralError } = require('../utils/errors');
//toma 4 argumentos err el primero, los middleware normal tienen 3

//La función de middleware handleErrors comprueba si el error pasado es una instancia de GeneralError. Si es así, devolvemos el código de estado y el cuerpo JSON con el estado y el mensaje
/**
 * middleware que maneja el error
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns el codigo de estado y el mensaje de error
 */
const handleErrorsMiddleware = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    console.log(err.message)
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    });
  }
  
  console.log(err)
  return res.status(500).json({
    status: 'error',
    message: err.message
  });
}


module.exports = {
    handleErrorsMiddleware
};