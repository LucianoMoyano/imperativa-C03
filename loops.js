const prompt = require("prompt-sync")({ sigint: true });

/* 
Qué Son Los Loops En Programación Y Para Qué Nos Sirven

Los Loops (en castellano, Bucles) sirven para repetir una tarea, una determinada cantidad de veces, hasta que se cumpla una condición dada de antemano.


El while Loop se parece a la declaración del if...else ya que ambos evalúan una condición y ejecutan un bloque de código.
Sin embargo, lo re-evalúa repetidas veces y ejecuta su bloque de código hasta que la condición deja de ser verdadera.


Sintaxis Del while Loop */

/* 
while(condicion){
    //bloque de codigo que se va a ejecutar
    //es algo que hace que la codicion se deje de cumplir
}


 */



/* Importante: Este código se va a ejecutar siempre que el resultado sea true. Cuando la condición sea false, saldremos del bucle, evitando entrar en lo que se conoce como un Loop Infinito.
  
  Veamos un ejemplo: */


/* let pasajero = 1
while(pasajero <= 20){
    console.log("Puede pasar, su asiento es el : " + pasajero)
    pasajero++
} */

/* 
1- declaramos la variable en primer lugar, en este caso al llamamos pasajero y le asignamos el valor de 1
2- definimos el loop while y la condicion que tiene que evaluar el programa
3- Dentro de las llaves { }, tenemos el bloque de codigo que se va a ejecutar siempre y cuando la condicion sea verdadera
4- Antes de cerrar la llave, ponemos un codigo que modifica la variable pasajero, para que la condicion cuando llegue a 21 se torne falsa y se corte el bucle.
*/


/* 
  
  - Loops Infinitos
  
  Los Loops Infinitos ocurren cuando la condición de un while Loop nunca es falsa. Por lo tanto, el código corre indefinidamente y se cuelga el programa.
  
  Importante: no lo pruebes en tu consola porque colgará tu navegador. */



/* let x = 0
while(x < 10){
    console.log(x)
}
 */


/* ¿Por Qué Es Un Loop Infinito?
  
  En este código, x es igual a 0 y la condicional dice: "Mientras x sea menor que 10 se debe mostrar por consola a x".
  Recordá: Antes de establecer la condición del while Loop, asegurate de escribir la condición de corte o medida de seguridad.
  Es decir, esa línea de código que modificará la variable y garantizará que la condición se vuelva falsa.
  
  En este ejemplo, el while sigue corriendo porque la condición siempre es verdadera. Para evitar esto, tendríamos que incrementar x de modo tal que, en algún momento, sea mayor a 10 y la condición se vuelva falsa.
  
  Los while Loop también pueden evaluar condiciones que sean Strings. Por ejemplo, si quisiéramos corroborar cuál es la palabra mágica para entrar a La Caverna De Los 40 Ladrones, podríamos escribir estas líneas de código:
   */


/* 
let palabraMagica = "abrete sesamo!"
let intento = prompt("Indicanos cual es la frase correcta: ")

while(intento != palabraMagica){
    console.log("Esa palabra es incorrecta")
    intento = prompt("Intentalo de nuevo, cual es la frase magica?: ")
}
console.log("Bienvenidos a la caverna de los 40 ladrones")
 */



/*
  - Variables Acumuladoras
  
  Una Variable Acumuladora (o Acumulador) es una Variable que se va construyendo a partir de cada iteración del loop. Veamos en este ejemplo cómo funciona la Variable Acumuladora: */


/* 
let i = 1
let final = 5
let acumuladora = 0

while(i <= final){
    acumuladora += i
    //acumuladora = acumuladora + i
    i++
}
console.log(acumuladora)
 */


/* 
en la primera vuelta seria acumuladora = 0 + 1
segunda vuelta, acumuladora = 1 + 2
tercera vuelta, acumuladora = 3 + 3
acumuladora = 6 + 4
acumuladora = 10 + 5

*/

//WHILE LOOPS ANIDADOS

/* let i = 1
let j = 1
let final = 5

while(2 <= 5){
    j = 1
   while(j <= final){
    console.log(i + " - " + j)
    j++
   }
   i++
}
 */




/* 
  - For Loops 
  
  son muy útiles para recorrer un arreglo y mostrar todos sus elementos. Sin embargo, no es la única manera de hacerlo. */

/* 
for (inicializacion; condicion; incremento / decremento) {
  //bloque de codigo que indica lo que queres hacer dentro del for
} 
*/

/* Veamos cada elemento por separado:
  
  Inicialización: Es la Variable que permite iterar el Arreglo. Esta expresión se ejecuta una sola vez. Solemos llamar a esta variable Contador.
  Condición: Es una expresión que se evalúa en cada iteración.
  Incremento/Decremento: Es una expresión que actualiza el valor de la Variable Contador después de cada iteración y asegura la condición de corte. Podemos especificar de qué manera queremos que se incremente o decremente el valor (si de uno en uno, de dos en dos, etc.)

  Si bien el For Loop no es muy distinto al While Loop, su sintaxis es más simple . */

//Ejemplos de while y for loops:

/* 
let i = 1
while(i <= 10){
    console.log(i)
    i++
}

for(let i = 1; i <= 10; i++){
    console.log(i)
}
 */



/*
 - EJERCICIOS EN CLASE -


  FizzBuzz
  
  Escribí un loop 
  que imprima en la consola los números del 1 al 16. 
  Deberá cumplir las siguientes condiciones: si el número a imprimir es múltiplo de 3, 
  debe mostrar en la consola el string 'Fizz'. En cambio, si es múltiplo de 5, debe mostrar:
   'Buzz'. Por último, si es múltiplo de ambos debe mostrar: 'FizzBuzz’
  
 
  */

/* for(let i = 1; i <= 16; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUZZ")
    } else if (i % 3 === 0){
        console.log("FIZZ")
    } else if(i % 5 === 0){
        console.log("BUZZ")
    } else {
        console.log(i)
    }
}


 */


/*
Venganza de FizzBuzz 
      
Creá una función 
que tenga la misma funcionalidad que el FizzBuzz anterior, 
pero que reciba por parámetro las palabras a imprimir (en vez de Fizz y Buzz) y los números con los que se activan y el número máximo de iteraciones.
Output esperado: fizzBuzz('Digital', 'House', 2, 7, 17)
        
      */


/* function fizzBuzz(string1, string2, num1, num2, num3){
    for(let i = 1; i <= num3; i++){
        if(i % num1 === 0 && i % num2 === 0){
            console.log(string1 + string2)
        } else if (i % num1 === 0){
            console.log(string1)
        } else if(i % num2 === 0){
            console.log(string2)
        } else {
            console.log(i)
        }
    }
}

fizzBuzz('Digital', 'House', 2, 7, 17)

 */









/* 
Sumatoria

Debés crear una función llamada `sumattion`
que reciba un número como parámetro
y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.
  
  Ejemplo: 
  sumattion(3) debe retornar 6 porque hace (1 +2 +3)
  sumattion(8) debe retornar 36
  
   */


function sumattion(numero){
    let suma = 0
    for(let i = 1; i <= numero; i++){
        suma += i
        //suma = suma + i
    }
    return suma
}
console.log(sumattion(8))