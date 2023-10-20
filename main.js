const prompt = require("prompt-sync")({ sigint: true });

/* 
COMENTARIO MULTILINEA
*/

// comentario de linea

/*
VARIABLES:

ES UN CONTENEDOR QUE GUARDA INFORMACIÓN, PARA DESPUES PODER UTILIZARLA

para crear una variables vamos a utilizar (var, let, const)

var: es una forma mas sencilla de declarar una variable. podemos redeclarar con el mismo nombre una variable, y tambien modificar su valor.

*/ /* 

var edad = 27;

var edad = 30; */

/* 
let: Permite declarar una variable, agregarle un valor y nos permite actualizar ese valor, pero no volver a declararla
*/

//let persona = "Luciano";
//let persona = "Luciano"

/* 
const(constante): permite crear una variable, que se va a mantener constante durante todo el programa. Es decir, que no se puede volver a redeclarar y tampoco cambiar o modificar su valor
*/

//const auto = 3;

/* 
Tipos de datos primitivos: string, numericos, booleanos, undefined, null,Nan

Tipos de datos complejos: Arreglos, funciones, objetos, etc


string: Son cadenas de caracteres que incluyenb numeros, espacio y letras. Se tiene que encerrar mediante comillas dobles y simples, para que JS no los confunda

numericos: funcionan igual que las operaciones matematicas y tambien podemos utilizarlos para restar, sumar, multiplicar y dividir

booleanos: Son datos de tipo true (verdadero) y false (falso), es decir, que activan o desactivan cierta parte del programa

undefined: Es un valor que posee una variables que esta sin definir en ese momento

null: Es una valor que posee una variable que esta explicitamente vacia

*/

let miNombre = "Sarid";
let otroNumero = 5;
let hayAsado = true;
let hayArepas = false;
let perro;
let gato = null;

console.log(hayAsado);
console.log(otroNumero);

/* 

 - Declara 3 variables. Siempre teniendo en cuenta que los nombres deben ser descriptivos:
    Numérica
    String
    Booleana
- Mostrarlas por la consola en 3 console.log distintos (uno por cada variable)
- Ahora modifica tus console.log para que ahora se muestran las 3 variables en el mismo console.log

*/
//1-
let edadd = 30;
let peliculaFavorita = "Hulk";
let esVerde = false;

//2-
console.log(edadd, esVerde, peliculaFavorita);
console.log(edadd);
console.log(esVerde);
console.log(peliculaFavorita);

//3-
/* console.log("Edad: " + edad + ", Película: " + peliculaFavorita + ", EsVerde: " + esVerde); */
console.log("Su edad es: " + edadd);

console.log(`${edadd} + ${esVerde} +  ${peliculaFavorita}`);


/* --------------------------------------------------------------------- */

/* 

 - Operadores De Comparación En JavaScript

... < ... : indica que la condicion de la izquiera es menor a la derecha
... > ... : indica que la condicion de la izquiera es mayor a la derecha
... >= ... : indican que la condicion que esta de la lado de la izuierda es mayor o igual a la que esta del lado derecho
... <= ... : indican que la condicion que esta de la lado de la izuierda es menor o igual a la que esta del lado derecho
... == ...: los simbolos de doble igual, refieren a una coparacion blanda. quiere decir que se va a estar evaluando el tipo de dato
...===... : los simbolos de triple igual, refieren a una comparacion estricta. quiere decir que se va a estar evaluando el tipo de dato y el contenido

Ejemplos: 

let respuestaUsuario = parseInt(prompt(Cuantos años tenes?))21
parseFloat(prompt(Cuanta cantidad de harina necesito para hacer un pan al horno?))
let edadMaxima = 21

if(respuestaUsuario === edadMaxima) {

}

5 == “5” esto en una comparación blanda es verdad
5 === “5” en una comparación estricta es falso

if (2=='2'){

    console.log("Hola");
}
------------------------
if (2==='2'){

    console.log("HOla");
}else{
    console.log("Adios")
}

--------------------------------------------------------------------------------------

- ¿Qué Diferencia Hay Entre = Y ==?

El = es de asignacion. Un operador de asignación

El  == seria una comparación blanda.

*/

/* 
- Operadores Lógicos Y De Desigualdad En JavaScript: 
todos los operadores lógicos y de desigualdad retornarán valores booleanos. La ventaja de usarlos es que permiten agrupar muchas condiciones y refactorizar el código, haciéndolo más rápido, legible y eficiente.

... || ... : Operador "o" o or. Para que la estructura de lo que nosotros estamos comparando devuelva true(verdadero) vamos a necesitar qu solo 1 de las condiciones se cumpla





Ejemplo: 

*/
true || true; //true
true || false; //true
false || true; //true
false || false; //false



/*
... && ... : Vamos a ecesitar cque 1 de las comparaciones sea falsa para que no se termine cumpliendo. Operador and o "y"

Ejemplo: 

*/
true && true; // La estructura es true.
true && false; // La estructura es false.
false && true; // La estructura es false.
false && false; // La estructura es false.
/*
... != ... : Este operador, llamado "diferente de.." o "de desigualdad". devuelve true si sus operandos no son iguales; en caso contrario, devuelve false

Ejemplo:

let edad = 19;
let amigos = 1;
let mayorEdad = edad >= 18;
let acompañado = amigos != 0;

if( mayorEdad && amigos){
    console.log("Puedes pasar")
}else{
    console.log("Suerte para la proxima")
}

----------------------------------------------------------------------------

 - Diferencia Blanda (!=) O Estricta (!==)
Al igual que con los operadores de comparación, la diferencia entre dos valores puede ser blanda o estricta. Mientras que, en la primera, se evaluará solo el contenido, en la segunda se considerará tanto el contenido como el tipo de dato.


- Operador De Negación En JavaScript


!: negando el valor booleano de cada dato.


!true = false
!false = true
!!false = false
!!true = true
!!1 = true
!0 = true
!!0 = false 
!"" = true
!" " = false

*/


console.log("------------------------------------------------------");

/* 
- Tomémonos un rato para armar las variables de los ejercicios 1 y 2 de esta guía. Recuerden guardarlos como archivos separados en la carpeta correspondiente.  
*/

//Variables de Mario:





//Variables de una persona




