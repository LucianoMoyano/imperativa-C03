/* Método push()

Para agregar elementos al final de nuestro Arreglo- sin necesidad de saber cuál es el último Índice-, usaremos el método push().

Sintaxis Del Método push(): */

/* nombreVariable.push()
.push(elemento) // de esta forma se va a añadir al arreglo "nombreVariable" al fial, el elemento
.push(elemento, elemento2) //se estarian agregando los dos elementos que le pasamos al final de nuestro arreglo 
 */


//Veamos un ejemplo:

//CODIGO

/* let colores = ["rojo", "azul", "verde"]

console.log(colores.push("amarillo"))

console.log(colores.push("marron", "violeta"))
console.log(colores)

 */











//CODIGO






//("----------------------------------");
/* Método pop()

El método .pop() saca el último elemento del Arreglo y lo retorna. Ese valor, a su vez, lo podemos guardar para volverlo a usar.

Importante: El método pop no lleva Argumentos y solamente saca el último elemento, uno por vez.

Sintaxis Del Método pop():*/


//nombreVariable.pop()




//Veamos un ejemplo:

//CODIGO

let colores = ["rojo", "azul", "verde"]

let colorVerde = colores.pop()
console.log(colores)
console.log(colorVerde)














