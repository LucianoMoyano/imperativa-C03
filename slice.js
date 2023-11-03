/* slice()

El método slice() se usa para generar una copia de un Arreglo. Esto sirve para trabajar sobre el clon del Arreglo sin afectar su original.

Como los Arreglos se pasan por referencia y no por valor, necesitamos un método para poder alterar un Arreglo sin afectar el original o tambien como se suele utilizar este metodo para recortar arreglos.
*/

//Sintaxis Del Método slice()

/* let arregloCopia = aregloOriginal.slice();

.slice() //es unicamente realizar una copia del arreglo original sin cambiar nada
.slice(valor1) //clona el arreglo desde el indice pasado como argumento y lo clona desde ese elemento(inclusive) hasta el final
.slice(valor1, valor2) ////clona el arreglo desde el indice pasado como argumento, desde ese elemento()inclusive, hasta el segundo argumento, sin incluir este ultimo

 */

//Veamos un ejemplo para ver la diferencia de cada caso:

//CODIGO

let frutas = ["banana", "naranja","manzana", "limon", "sandia"]

/* let todasFrutas = frutas.slice()
console.log(todasFrutas) */
let todasFrutasMenosBanana = frutas.slice(1)
console.log(todasFrutasMenosBanana)
let menosBananaSandia = frutas.slice(1, 4)
console.log(menosBananaSandia)