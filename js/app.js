/*
1- Variables y Operadores
Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/

//a)
var numberX = 18;
var numberY = 7;
var sumXY = numberX + numberY;
console.log('X equals '+numberX);
console.log('Y equals '+numberY);
console.log('The sum of X and Y equals '+sumXY);

//b)
var hello = 'Hello World';
var goodbye = 'Goodbye World';
console.log(hello+' and '+goodbye);

//c)
var textX = 'This is a string';
var textY = 'This is also a string';
var xy = textX.length + textY.length;
console.log(textX+ ' (variable one)');
console.log(textY+ ' (variable two)');
console.log('The lenght of these two variables is '+xy);


/*
2- Strings
Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

//a)
var textA = 'I love the smell of napalm in the morning.'.toUpperCase();
console.log(textA);

//b)
var textB = 'Say hello to my little friend';
var textBleft = textB.substring(0, 5);
console.log(textBleft);

//c)
var textBright = textB.substring(textB.length - 3, textB.length);
console.log(textBright);

//d)
var textC = 'YOU SHALL NOT PASS!';
var textCupper = textC.substring(0, 1).toUpperCase()+textC.substring(1, textC.length).toLowerCase();
console.log(textCupper);

//e)
var textD = 'Houston, we have a problem.'
var textDblank = textD.indexOf(' ');
console.log(textDblank);

//f)
var textE = 'hakuna matata'
var textEupper = textE.substring(0, 1).toUpperCase()+textE.substring(1, textE.indexOf(' ')).toLowerCase()+' '+textE.substring(textE.indexOf(' ')+1, textE.indexOf(' ')+2).toUpperCase()+textE.substring(textE.indexOf(' ')+2, textE.length).toLowerCase();
console.log(textEupper);


/*
3- Arrays
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
Agregar un elemento al principio y al final del array (utilizar unshift y push).
Quitar un elemento del principio y del final del array (utilizar shift y pop).
Invertir el orden del array (utilizar reverse)
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

//a)
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var monthsClone = Array.from(months);
console.log(months[4]+' and '+months[10]);

//b)
console.log(months.sort());

//c)
months.unshift('Start');
months.push('End');
console.log(months);

//d)
months.shift();
months.pop();
console.log(months);

//e)
console.log(months.reverse());

//f)
var monthsJoin = monthsClone.join(' - ');
console.log(monthsJoin);

//g)
var monthsSlice = monthsClone.slice(4, 11);
console.log(monthsSlice);


/*
4- If Else
Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años
*/

//a)
var rng = Math.random();
console.log(rng);

if(rng >= 0,5) {
    alert('Greater than 0,5')
} else {
    alert('Lower than 0,5')
}

//b)
var age = Math.floor(Math.random() * 101);
console.log(age);

if(age < 2) {
    alert('Bebe')
} else if (age >= 2 && age < 13) {
    alert('Nino')
} else if (age >= 13 && age < 20) {
    alert('Adolescente')
} else if (age >= 20 && age < 31) {
    alert('Joven')
} else if (age >= 31 && age < 61) {
    alert('Adulto')
} else if (age >= 61 && age < 76) {
    alert('Adulto Mayor')
} else { 
    alert('Anciano')
}


/*
5- For
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
*/

//a)
var randomWords = ['grace', 'steward', 'agenda', 'accept', 'economy'];

for (i = 0; i < randomWords.length; i++) {
    alert(randomWords[i]);
}

//b)
for (i = 0; i < randomWords.length; i++) {
    alert(randomWords[i].substring(0, 1).toUpperCase()+randomWords[i].substring(1, randomWords[i].length).toLowerCase());
}

//c)
var sentence ='';

for (i = 0; i < randomWords.length; i++) {
    sentence = sentence+' '+randomWords[i];
}

alert(sentence);

//d)
var randomArray = [];

for (i = 0; i < 10 ;i++) {
    randomArray.push(i);
}

console.log(randomArray);


/*
6- Funciones
Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/

var numA = 5;
var numB = 16;
var numC = 133;

//a)
function mySum(a, b) {
    return a + b;
}

var resultSum = mySum(numA, numB);
console.log(resultSum);

//b)
function mySum(a, b) {
    if(isNaN(a) || isNaN(b)) {
        alert('Error: one of the parameters is not a number');
        return NaN;
    } else {
        return a + b;
    };
}

var resultSum = mySum(numA, numB);
console.log(resultSum);

//c)
function isInteger(c) {
    if(Number.isInteger(c)) {
        return true;
    } else {
        return false;
    };
}

var resultInt = isInteger(numC);
console.log(resultInt);

//d)
function mySum(a, b) {
    if(isNaN(a) || isNaN(b)) {
        alert('Error: one of the parameters is not a number');
        return NaN;
    } else if(Number.isInteger(a) == false || Number.isInteger(b) == false){
        alert('Error: one of the parameters is not an integer');
        return Math.round(a) + Math.round(b);        
    } else {
        return a + b;
    }
}

var resultSum = mySum(numA, numB);
console.log(resultSum);

//e)
function mySum(a, b) {
    return a + b;
}

function isNumber(d) {
    if(isNaN(d)) {
        alert('Error: one of the parameters is not a number');
        return NaN;
    } else {
        return d;
    };
}

var resultSum = mySum(isNumber(numA), isNumber(numB));
console.log(resultSum);