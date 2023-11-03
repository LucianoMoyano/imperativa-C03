//Metodos unshift() y shift()

/* 
Los siguientes metodos nos sirven para manipular los Arreglos.

Los métodos unshift y shift, agregan y quitan elementos al comienzo del Arreglo
*/

/* para agregar elementos al comienzo de nuestro Arreglo, usaremos el método unshift siguiendo esta sintaxis: */

//nombreVariable.unshift(elemento)

/* El método shift, en cambio, quita los elementos que estén al comienzo de la posición y los retorna: */

//nombreVariable.shift()

//Veamos este ejemplo para entender mejor cómo funcionan estos métodos:

//CODIGO

/* let numero = [7, 10, 22, 45, 16]

let numero7 = numero.shift()
console.log(numero)
console.log(numero7)

numero.unshift(5)
console.log(numero)

numero.unshift(1, 2, 3)
console.log(numero)

let nuevoArreglo = numero.slice(2)
console.log(nuevoArreglo)
 */

let puntajes = [1, 7, 0 , 8 , 4 , 9, 5 , 6]

let comienzo = 2
let eliminar = 5

puntajes.splice(comienzo, eliminar)
console.log(puntajes)



