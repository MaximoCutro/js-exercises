/*
1- Variables y Operadores
Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/

var numberX = 18;
var numberY = 7;
var sumXY = numberX + numberY;
console.log('X equals '+numberX);
console.log('Y equals '+numberY);
console.log('The sum of X and Y equals '+sumXY);

var hello = 'Hello World';
var goodbye = 'Goodbye World';
console.log(hello+' and '+goodbye);

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

var textA = 'I love the smell of napalm in the morning.'.toUpperCase();
console.log(textA);

var textB = 'Say hello to my little friend';
var textBleft = textB.substring(0, 5);
console.log(textBleft);

var textBright = textB.substring(textB.length - 3, textB.length);
console.log(textBright);

var textC = 'YOU SHALL NOT PASS!';
var textCupper = textC.substring(0, 1).toUpperCase()+textC.substring(1, textC.length).toLowerCase();
console.log(textCupper);

var textD = 'Houston, we have a problem.'
var textDblank = textD.indexOf(' ');
console.log(textDblank);

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

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var monthsClone = Array.from(months);
console.log(months[4]+' and '+months[10]);

console.log(months.sort());

months.unshift('Start');
months.push('End');
console.log(months);

months.shift();
months.pop();
console.log(months);

console.log(months.reverse());

var monthsJoin = monthsClone.join(' - ');
console.log(monthsJoin);

var monthsSlice = monthsClone.slice(4, 11);
console.log(monthsSlice);