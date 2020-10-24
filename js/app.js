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
