/* (---------------- Matrices -----------------) */

//Una matriz es una variable que tiene como valor un arreglo y a su vez este arreglo tiene sub-arreglo dentro como valor
// contiene filas y columnas, son de estructura bidimensional.



/* console.log(matrizNumeros[1])
console.table(matrizNumeros) */


//modificamos un elemento dentro de la matriz
/* matrizNumeros[1][1] = 9
console.table(matrizNumeros) */
//Matriz de 3x3
let matrizNumeros = [
    [1, 2, 3 ], //primer subarreglo - 0
    [4 ,5 ,6 ], // segundo sub-arreglo - 1
    [7, 8, 9 ] // tercer sub-arreglo - 2
]
//recorrer e imprimir la mmatriz con doblle for

/* for(let i = 0; i < matrizNumeros.length; i++){
    for(let j = 0; j < matrizNumeros[i].length; j++){
        console.log(matrizNumeros[i][j])
    }
} */

// utilizar doble for anterior pero separando con variables

/* for(let i = 0; i < matrizNumeros.length; i++){
    const filas = matrizNumeros[i]
    for(let j = 0; j < filas.length; j++){
        const columnas = matrizNumeros[i][j]
        console.log(columnas)
    }
} */

// mostrar por consola los numeros que sean solo pares

for(let i = 0 ; i < matrizNumeros.length; i++){
    for(let j = 0 ; j < matrizNumeros[i].length; j++){
        if(matrizNumeros[i][j] % 2 === 0){
            console.log(matrizNumeros[i][j])
        }
    }
}

//crear una funcion que cree una matriz de 10 x 10


/* function generarMatriz10x10(){
    //pensar comov amos a mostrar la matriz
    let array = []
    //hacemos referencia a la creación de las filas aumentadas de 10 en 10
    for(let i = 0; i <= 90 ; i += 10){
        //sirve para las filas que se vayan a crear, para almacenar los sub elementos
        let filas = []
        //nos sirve para la creación de las columnas que se incrementan de 1 en 1
        for(let j = 1; j <= 10; j++){
            //por fila se arma el numero que se va a acargar o a su vez seria el elemento del sub arreglo
            filas.push(i + j)
        }
        //terminamos pusheando las filas con sus elemento al arreglo principal
        array.push(filas)
    }
    return array
} */


function generarMatriz10x10(){
    let matriz = []
    let valor = 1

    for(let i = 0; i < 10; i++){
        let fila = []
        for(let j = 0; j < 10; j++){
            fila.push(valor)
            valor++
        }
        matriz.push(fila)
    }
    return matriz
}

console.table(generarMatriz10x10())