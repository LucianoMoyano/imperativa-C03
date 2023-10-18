/* 
COMENTARIO MULTILINEA
*/

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
