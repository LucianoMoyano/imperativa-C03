/* 
    EXPLICACIONES OBJETO MATH | METODOS: MAP | FILTER

// OBJETO MATH : 

esta relacionado a las propiedades y metodos de la matematicas. 
no toma como parametro un arreglo, sino que toma un lista de numeros. Funciona tanto para numeros negativos, como tambien para numeros decimales.



Math.PI; 3,1416, más conocido como número pi, es una de las constantes matemáticas por antonomasia. 
Math.pow(9, 2); 81 - devolvernos el primer numero multiplicado tantas veces como indique su segundo parametro
Math.random(); nos devuleve un numero aleatorio entre 0 y 1
Math.floor(7.9); nos devuelve el numero pasado por parentesis (con decimales) siempre redondeado hacia abajo
Math.ceil(7.1); nos devuelve el numero pasado por parentesis (con decimales) siempre redondeado hacia arriba
Math.max(); Nos devuelve el valor mas grande entre los numeros que le pasemos por parentesis
Math.min(); Nos devuelve el valor mas chico entre los numeros que le pasemos por parentesis

*/

let numero = [5,10, 25, 58, 12]
let maximo = 0

function encontrarMaximo (array){
    for(let i = 0; i < array.length; i++){
        if(maximo < array[i]){
            maximo = array[i]
        }
    }
    return maximo
}

console.log("con ciclo for")
console.log(encontrarMaximo(numero))

console.log("con Math.max")
console.log(Math.max(5,10, 25, 58, 12))

console.log("con Math.min")
console.log(Math.min(5,10, 25, 58, 12))

/* 
MAP: 

("---------------CLASE MAP------------------");

/* 
El METODO MAP es una pieza fundamental para la programación funcional.

Crea un nuevo arreglo con los resultados de la llamada a la funcion indicada, aplicados a cada uno de sus elementos. Se puede usar en los arreglos de javascrpt.


SINTAXIS:

arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });

map() recibe como parámetro una función la cual recibe 3 parámetros, el elemento actual, indice del elemento actual y el arreglo original.

Sintaxis
let nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])

value: El elemento actual del array que se esta procesando.
index: El elemento actual del array que se esta procesando
array: El array sobre el que se esta produciendo el metodo map
thisArg: ES un valor opcional, podemos usarlo como this al ejecutar la funcion
*/

//EJERCICIOS DE PRUEBA:

/* TRIPLICADOR

Tenemos un arreglo de numeros y necesitamos pasar todos esos numeros elevados a su tercera potencia.

let numeros = [3, 10, 20, 50] => [9, 30, 60, 150]
*/

let numeros1 = [3, 10, 20, 50]

/* const triplicador = numeros1.map(function(numero){
    return numero * 3
})
console.log(triplicador) */





/* ------------------------------------------------- */
//MULTIPLICADOR
//arrow function

const multiplicador = numeros1.map(numero => numero * 2)
console.log(multiplicador)



/* 
LISTA DE PRODUCTOS:

Tenemos una lista de productos que comprara un usuario y queremos obtener solamente los nombres de los productos a comprar. 
*/

//Resolviendo con metodo FOR()

const products = [
  { id: "1", name: "Remera", category: "Ropa" },
  { id: "2", name: "Botines de futbol", category: "Zapatillas" },
  { id: "3", name: "Zapatillas", category: "Zapatillas" },
  { id: "4", name: "Camisa", category: "Ropa" },
  { id: "5", name: "Jean", category: "Ropa" },
];

let nameDeProductos = []

for(let i = 0; i < products.length; i++){
    nameDeProductos.push(products[i]["name"])
}

console.log(nameDeProductos)



//Resolviendo con metodo MAP()



let nombreProductos = products.map(producto => {
    return producto["category"]
})

console.log(nombreProductos)

/*
dejo la documentación de MDN por si quieren ver mas ejemplos.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

/* 
("-----------------CLASE FILTER---------------");
/* 
El metodo Filter() : 

Nos permite filtrar solo los elementos que nosotros queremos y devolverlos en un nuevo arreglo.
Es como una maquina que va agarrando cada elemento y decide si pasa o no al nuevo arreglo, si algun elemento no cuenta con ciertas condiciones termina siendo descartado.
toma una funcion que comprueba cada elemento del array para ver si cumple con las condiciones o no.


*/

//EJERCICIO SIMPLE: mostrar solo las ciudades por consola

const ciudades = ["Madrid", "Buenos Aires", "Nueva York"];

const nuevoArray = ciudades.filter((ciudad)=>{
    console.log(ciudad)
})



//("-----------------------------------------------");

//Mosatrar solamente las ciudades que tengas mas de 6 caracteres

const arregloNuevo = ciudades.filter((ciudad)=>{
    console.log(ciudad)
    return ciudad.length > 6
})
console.log(arregloNuevo)




/* ------------------------------------------- */

/* 
NUMEROS PARES
Filtrar solamente los numeros pares del siguiente arreglo!

Utils: 
let numbers = [3, 7, 6, 13, 2, 24, 99];
*/
/* 
let numbers = [3, 7, 6, 13, 2, 24, 99]
let numeros2 = numbers.filter(arr => {
    if(arr % 2 === 0){
        return arr
    }
})
console.log(numbers)
console.log(numeros2)
 */

/* 
EJERCICIO:

Pongamos un ejemplo muy sencillo, de la siguiente lista de números, queremos obtener solamente los mayores que 10.

Utils:
let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84,6]


LO QUE PODRIAMOS HACER DE MANERA SIMPLE SERIA LO SIGUIENTE:

*/
//CON FOR LOOP


let numbers = [1,5,23,4,12,45,78,8,8.9,10,11,3.4,10.1,84, 110, 200, 64,6]

//let numMayoresa10 = []

/* for(let i = 0; i < numbers.length; i++){
    let comparador = numbers[i]
    if(comparador > 10){
        numMayoresa10.push(comparador)
    }
}
console.log(numMayoresa10) */



//("-----------------------------------");

//CON METODO FILTER

let numMayoresA10 = numbers.filter(number => number > 10)
console.log(numMayoresA10)



/* ---------------------------------------------------------- */

//Vamos a utilizar el metodo filter para sacar los elementos que se repiten en un array.

const numeros = [1, 2, , 2, 5, 3, 4, 3, 5, 1];

const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
  return posicion === numeros.indexOf(numero);
});

console.log(numerosUnicos)

/* 
Explicacion de los 3 parametros:
numero: hace referencia para cada elemento
posicion: para las posiciones dentro del array
numeros: hace referencia al array.

El método indexOf() verifica la posición de un elemento dentro de un Arreglo y nos devuelve su Índice. ⚠️Importante: Si ese elemento no existiera en el Arreglo, nos retornará -1.
*/

/*
Mover ceros a lo último
Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

Ejemplo: 

moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0] 
*/

//METODO FILTER

const arreglo = [false,1,0,1,2,0,1,3,"a"]

const moveZeros = (arr) => {
    let sinCeros = arr.filter((elemento)=> elemento !== 0)
    let conCeros = arr.filter((elemento)=> elemento === 0)

    let resultado = sinCeros.concat(conCeros)

    return resultado
}


console.log(moveZeros(arreglo))