

/**
 * 
 * @param {int} n  entero
 * @param {Array} queries 
 */
function arrayManipulation(n, queries) { 
    const arrayInicial = []
    for (var i = 1; i <= n; i++)  arrayInicial.push(0); // se crea el array
    // sumarle numeros
    for (const query of queries) { 
        for (let i = query[0]; i <= query[1]; i++) { 
            const indice = i - 1  
            arrayInicial[indice] = arrayInicial[indice] + query[2] // suma
        }
        console.log(arrayInicial)
    }

    return Math.max.apply(null, arrayInicial) //retorna el maximo
}





const resultado = arrayManipulation(5, [[1, 2, 100], [2, 5,100], [3, 4, 100]])

//const resultado = arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]])
console.log("Respuesta numero mayor: "+ resultado)





