const prompt = require("prompt-sync")({ sigint: true });
("----------------------CLASE IF - IF/ELSE");

/* 
Las Funciones Condicionales de JavaScript 

son una herramienta que posibilita la toma de decisiones y permite realizar acciones de acuerdo a la entrada de información que reciba. 
 
sentencia if... se usa, principalmente, para tomar decisiones. Permite que, si la condición es verdadera (true), se ejecute un código.

Sintaxis De La Función if...
*/

/* if(condicion){
    // si la condicion es verdadera (true), ejecuta este bloque de codigo
} */




/* Sin embargo, la Función Condicional más común es if… else. Con esta, nos aseguramos que, cuando una condición se cumple (es igual a true), retornemos una cosa. Sino (si es false), retornemos otra. */

/* 
Ejemplo. 
*/


/* if(condicion){
// si la condicion es verdadera (true), ejecuta este bloque de codigo
}else{
    // si la condicion pasa a ser falsa (false), me va a estar ejecutando este bloque de codigo
} */


/* 
Si hiciéramos una app para evaluar a las personas que llegan a una guardia en un hospital, podríamos escribir el siguiente código que organice la atención de los pacientes en función de su urgencia:
*/
//Ejemplo

/* let temperatura = parseInt(prompt("Ingrese su temperatura: "))

 if(temperatura > 37){
    console.log("prioridad alta")
} else{
    console.log("prioridad baja")
} 
 */
/* 
La página Code to Graph te permite pegar tu código para ver cómo es el camino lógico de forma gráfica.

https://crubier.github.io/code-to-graph
*/
("-----------------------------------------");

/* 
Anidar if... else

Las Estructuras Condicionales de tipo if...else pueden anidarse para generar distintos caminos según el input del usuario.


Aspectos Importantes A Tener En Cuenta

El código se lee y ejecuta de arriba para abajo. Por lo tanto, el orden es muy importante a la hora de codear, tanto a la hora de declarar Variables como de generar las Estructuras Condicionales.

Las Estructuras Condicionales de tipo if...else pueden anidarse, unas dentro de otras, para:

- Generar múltiples bifurcaciones en función del objetivo del proyecto.
- Mostrar un único camino lógico a cada usuario.
*/

//Ejemplo:


/* let edad = parseInt(prompt("Cual es tu edad?: "))

if(edad >= 21){
    console.log("Podes ingresar al bar")

    let numeroSecreto = 10
    let loQueDiceElUsuario = parseInt(prompt("Decinos cual es el numero secreto: "))
    if(numeroSecreto === loQueDiceElUsuario){
        console.log("Podes inresar a la fiesta secreta tambien")
    }else{
        console.log("No podes ingresar a la fiesta secreta")
    }

}else{
    console.log("No podes ingresar al bar")
}

 */




/* 
else... if

else... if es un recurso para poder anidar caminos intermedios entre el if y el else final. Una vez que se toma uno de los caminos, se completa el bloque lógico.
*/

//Sintaxis:

/* if(condicion){
    //este bloque de codigo
}else if(condicion2){
    //este bloque de codigo de la condicion 2
}
else{
    //este bloque de codigo
} */



/* 
Siguiendo el ejemplo del bar, si un usuario puede pasar al bar si tiene 18 años, pero no puede tomar alcohol hasta ser mayor de edad a los 21, podríamos escribir el siguiente código: 
*/
//Ejemplo


/* let edad = parseInt(prompt("Indicame tu edad: "))


if(edad < 18){
    console.log("No podes ingresar al bar")
} else if(edad >= 18 && edad < 21){
    console.log("podes ingresar al bar, pero no podes tomar alcohol")
}else{
    console.log("podes ingresar al bar y tambien tomar alcohol")
} */






/* 
Operador Ternario

El Operador Ternario es una manera de simplificar las estructuras condicionales de tipo If...else para escribirlas en una sola línea.

Sintaxis De Los Operadores Ternarios

Los Operadores Ternarios tienen una estructura con 3 Argumentos:

- Una condición
- Un signo de interrogación (?)
- Los dos caminos posibles, separados por dos puntos (:)

condicion ? lo que se ejecuta si es true : lo que se ejecuta si es false.

*/

//Ejemplo
/* 
let numeroDeTragos = parseInt(prompt("Indicame cuantos tragos tomaste en la fiesta: "))

numeroDeTragos > 1 ? console.log("usted no puede manejar") : console.log("puede seguir manejando") 
 */


//Ejemplo 2


/* let nombre = prompt("Indicanos cual es tu nombre: ")

nombre.length >= 3 ? console.log("respuesta recibida") : console.log("no recibimos tu respuesta")

 */







//Estructura SWITCH

/* 
La estructura condicional Switch() es otra alternativa para la toma de deciciones de nuestro programa.
Es util cuando ya sabemos de antemano cuales son los posibles datos que se vana evaluar
*/
/* switch( condicion o parametro ){
  case 1: //el primer caso que se va a evaluar
  // dependiendo si el caso es el correcto nos devuelve este bloque de codigo

    break // para cortar la ejecucion de los siguientes al encontrar el correcto se corta el programa con el break
    default :
    //Este bloque de codigo se muestra en el caso de no encontrar una conicidencia con los case anteriores
}
 */
//Ejemplo

let num = 2

switch(num){
    case 1:
        console.log("entramos al primer caso")
        break;
    case 2: 
        console.log("entramos al segundo caso")
        break
    case 3:
        console.log("entramos al tercer caso")
        break
    default:
        console.log("este bloque de codigo se muestra en el caso de no encontrar una coincidencia con los cases anteriores")
} 


let dia = parseInt(prompt("Ingrese un numero"));

if (dia === "1") {
  console.log("Lunes");
} else if (dia === "2") {
  console.log("Martes");
} else if (dia === 3) {
  console.log("Miercoles");
} else if (dia === 4) {
  console.log("Jueves");
} else if (dia === "5") {
  console.log("Viernes");
} else if (dia === "6") {
  console.log("Sabado");
} else if (dia === "7") {
  console.log("Domingo");
} else {
  console.log("Ingrese un numero del 1 al 7");
}

let dia1 = parseInt(prompt("Ingrese un numero"));

switch (dia1) {
  case "1":
    console.log("Lunes");
    break;
  case "2":
    console.log("Martes");
    break;
  case "3":
    console.log("Miercoles");
    break;
  case "4":
    console.log("Jueves");
    break;
  case "5":
    console.log("Viernes");
    break;
  case "6":
    console.log("Sabado");
    break;
  case "7":
    console.log("Domingo");
    break;
  default:
    console.log("Ingrese un valor de 1 a 7");
}
 