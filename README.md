# backend XYZ
````
npm install
````
***iniciar el proyectoXYZ***
````
npm start
````
***iniciar algoritmo***
````
node algoritmo/algoritmia.js
````

***Descripcion***

Para brindar solucion a la empresa XYZ se desarrollo el backend de la siguiente forma, base de datos se utilizó MongoDB, en un servidor mongoBD Atlas, se utiliza este servicio por la elasticidad que tiene el motor de base de datos, ya que es muy flexible para crear la BD, por ejemplo en el ahorro de tiempo. 
se crearon las siguientes colecciones: -Producto: Información de los productos que ingresan a la empresa, contiene el crud completo.-cliente: Donde se lleva el registro de datos basicos de los clientes que compraran los productos.-factura:  En esta coleccion se maneja toda la información de la factura, sobre esta se maneja consultas clave como lo son ventas por mes.-puntuacion: Se maneja esta colección con el fin de hacer inserciones y consultas en la bd-Inventario: coleción donde se lleva el registro de las entradas y salidas de cada producto.

***Apis***

***1*** Crear productos, actualizar y eliminar los mismos

crud 
**/productos**

***2*** Llevar el inventario de cuantos productos tienen en stock y cuantos se han vendido

get 
**/producto/inventario**

***3*** Conocer cuáles son los clientes que más compran

get
**/clientes/frecuentes**


***4*** Manejar los tiempos de entrega de sus productos por sus operarios

get
**/productos/entrega**

***5*** Conocer la puntuación de sus productos según sus clientes

get
**/productos/puntacion**


***6*** Ver las estadísticas de sus productos

get
**/estadisticas**

Para el funcionamiento correcto se crearon mas APIS, que ayudan con las consultas e inserciones en la bd de prueba.


## pruebas 

***postman***

archivo: XYZ.postman_collection.json, se encuentra en la raiz del proyecto
