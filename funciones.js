const prompt = require("prompt-sync")({ sigint: true });

("------------------------ CLASE FUNCIONES -------------------------");

/*
- ¿Qué Es Una Función?
Una Función es un bloque de código que nos permite realizar una tarea
en particular. Para que la Función se ejecute, "algo" debe invocarla.
Es una herramienta muy útil porque estiliza el código y lo hace más
escalable.

Las Funciones, inicialmente, deben ser definidas y, luego, deben ser
llamadas para que se puedan ejecutar.

*/


/* // funciones declaradas
function nombreFuncion (){}

//funciones expresadas
let nombreFuncion = function(){}

//arrow functions

let arrowFunction = a => a * a 

// Sintaxis De La Función

//instanciamos la palabra reservada function
function nombreEnCamelCase (){
//Los parentesis deben quedar vacios, hasta que instanciemos los parametros que vamos a utilizar
console.log("Soy una funcion") // bloque de codigo que se va a ejecutar

} // se cierra la llave
nombreEnCamelCase() //Es llamar a la funcion y ejecutarla

 */









 

/*
- ¿Qué Es Un Parámetro?*
Un Parámetro es una Variable que creamos al momento de definir una
Función y, cada vez que la ejecutamos, le pasamos un argumento(su
valor) como input.


*/
/* 
function cantarCumple (nombre){
    console.log("que los cumplas feliz")
    console.log("que los cumplas feliz")
    console.log("que los cumplas feliz " + nombre + "!")
    console.log("que los cumplas feliz")
}

cantarCumple("Claudia") */

/* ------------------------------- */

/* function areaCuadrado (lado){
    console.log(lado * lado)
}
areaCuadrado(3)

 */


/*
- Funciones Con Múltiples Parámetros
Podemos ejecutar las Funciones pasándoles todos los Parámetros que necesitemos.

Sintaxis De Las Funciones Con Múltiples Parámetros. Debemos separar los Parámetros con una coma.
  */


/* function areaTriangulo (base, altura, ancho){
    console.log(base * altura)
}
areaTriangulo(2, 5) */



/*
- Funciones Con Variables Por Parámetro
El Parámetro que le pasemos a una Función también puede ser un valor
guardado en una Variable.

al ejecutar una Función que lleve un input, podemos pasarle una
Variable como Parámetro. Por ejemplo:
*/


/* function cantarCumple2 (persona){
    console.log("Que los cumplas feliz " + persona + "!")
}

let nombre = prompt("Cual es tu nombre?")
cantarCumple2(nombre)
 */












/*
- Parámetros Por Default
Los Parámetros Por Default permiten que los Parámetros de una Función
sean definidos con un valor inicial.

Ejemplo:
*/

//Se puede asignar un valor por defecto a nuestros parametros, tenemos que agregar el simbolo de = seguido del valor qeu vallamos a instanciar. Ejemplo: b = 2
/* function multiplicacion (a, b = 2, c){
    console.log((a * b) / c) 
}

multiplicacion(5, 3, 2)

//-----------------------

let suma = (a, b = 0) => {
    return a + b
}

console.log(suma()) // Nan

console.log(suma(3)) // 3

 */

/*
- La Keyword return
La keyword return se usa al declarar una Función para devolver un
valor específico de ella. Esto sucede para guardar ese valor en una
Variable o usarlo por fuera del bloque de definición de la Función.

Importante: Al usar esta palabra reservada se da por finalizada la
ejecución de la Función, independientemente de la extensión del bloque
de código.

ejemplo:
*/
/* 
function determinarSigno(numero) {
    if (numero > 0) {
      return "El número es positivo";
    } else if (numero < 0) {
      return "El número es negativo";
    } else {
      return "El número es cero";
    }
  }
 */

/* function operacion(num1, num2, num3){
    console.log(num2)
    //el return finaliza la ejecución de la función
    return num1 * num3
    console.log(num3)
}
console.log(operacion(10, 15, 20)) */


//----------------------------------------

/* function cuadrado (numero){
    console.log(numero * numero)
}
cuadrado(4) //16

console.log("El resultado de 4 al cuadrado es: " + cuadrado(4))  */

function cuadrado (numero){
    return numero * numero
}
cuadrado(4) //16

console.log("El resultado de 4 al cuadrado es: " + cuadrado(4)) 





/*
- Arrow Functions 🏹
Las Arrow Functions son una alternativa a la función clásica. Estas
son incorporadas a partir de ES6 y se ven a menudo en dferentes
ejemplos de internet.

Una de sus ventajas es que su sintaxis es más compacta y flexible que
las Funciones clásicas creadas con function.

*/
// Función Clásica

function cuadrado (numero){
    return numero * numero
}
cuadrado(4) //16



/*    
Sintaxis
Las Arrow Functions se componen de 3 partes:

Los parámetros entre paréntesis, en este caso (a,b).
Del lado derecho de los parámetros, un Token (=>).
Por último, las llaves donde dentro estarán las acciones que se deban
ejecutar. */
// Arrow Function

let sumar = (a, b) => {
    return a + b
}
sumar(2, 5)


let resta = numero => numero - numero


/* Las Arrow Functions son muy flexibles a la hora de codear. Su
sintaxis se puede adaptar a cada caso.
 */


//Ejercicios resueltos!

/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. */

function pulgadasACm(pulgadas) {
    return pulgadas * 2.54;
  }
  pulgadasACm(5);
  
  /* Crear una función que recibe un string y lo convierte en una URL. 
  ej: “pepito” es devuelto como “http://www.pepito.com”
   */
  
  function url(string) {
    return "http://www." + string + ".com";
  }
  url("pepito");
  
  /* Crear una función que recibe un string y devuelve la misma frase pero con admiración. */
  
  function admirador(palabra) {
    return palabra + "!!!";
  }
  admirador("Bienvenidos");
  
  /* Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. */
  
  function edadPerro(edadHumano) {
    return edadHumano * 7;
  }
  edadPerro(27);
  
  let edadPerro = (edadHumano) => edadHumano * 7;
  edadPerro(27);
  
  /* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
  PD: considera que tu mes de trabajo tiene 40 horas. */
  
  function valorHora(sueldo) {
    return sueldo / 40;
  }
  valorHora(1500);
  
  /* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores. */
  
  function imc(peso, altura) {
    return peso / (altura * altura);
  }
  imc(75, 1.73);
  
  let imc = (peso, altura) => peso / (altura * altura);
  imc(75, 1.73);
  
  /* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
  Investiga que hace el método de strings .toUpperCase() */
  
  function mayus(string) {
    return string.toUpperCase();
  }
  mayus("hola como estan?");
  
  /* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
  pista: te servirá revisar que hace la palabra reservada typeof. */
  
  function tipoDeDato(dato) {
    return typeof dato;
  }
  tipoDeDato(false);
  tipoDeDato(27);
  tipoDeDato("Nancy");
  
  /* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
  Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi */
  
  function circulo(radio) {
    return Math.PI * radio * 2;
  }
  circulo(2);
  


