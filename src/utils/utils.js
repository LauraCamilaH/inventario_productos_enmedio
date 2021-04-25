
/**
 * redirecciona el error con el fin de no utilizar  el try-catch
 * @param {*} fn 
 */
const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next)



// app.get('/hello', asyncHandler((req, res, next) => { // como se debe de llamar
//     // Some code here. Any error will be catch and pass to expressjs
// }));



module.exports = {
    asyncHandler,
}