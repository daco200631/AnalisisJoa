console.log("Por David Peña")
console.log("Del Grado 10B")

console.log("Solucion Punto #1");
 
var lado;
lado = parseInt( prompt("Por Favor Ingresar El Lado Para Hallar el Area del Cuadrado") );
console.log("El Area Del Cuadrado Es ", lado * lado)

var lado2
lado2 = parseInt( prompt(" Por Favor Ingresar El Lado Para Hallar el Area del Cubo") );
console.log("El Volumen Del Cubo Es ", lado2 * lado2 * lado2)

console.log("Solucion Punto #2");

var base
base = parseInt( prompt("Favor Ingresar La Base Del Rectangulo") );

var altura
altura = parseInt( prompt("Favor Ingresar La Altura Del Rectangulo") );


console.log("El Perimetro es de " + 2 * (base + altura));
console.log("El Area es de " + (base + altura));

console.log("Solucion Punto #3");

var radio;
radio = parseInt(prompt("Favor Ingresar El Radio") );
console.log("El Area Del Circulo Es ", Math.PI * radio * radio)

console.log("Solucion Punto #4");

var base1;
var base2;
var h;

base1 = parseInt(prompt("Favor de ingresar la primera base") );
base2 = parseInt(prompt("Favor de ingresar la segunda base") );
h = parseInt(prompt("Favor de ingresar la altura") );
console.log("El Area Del Trapezoide Es ", + (h * (base1 + base2) / 2) );

console.log("Solucion Punto #5");

var ancho;
var largo;
var profundo;

ancho = parseInt(prompt("Favor de ingresar lo ancho") );
largo = parseInt(prompt("Favor de ingresar lo largo") );
profundo = parseInt(prompt("Favor de ingresar lo profundo") );
console.log("La piscina se llenaria con", + ancho * largo * profundo, "litros");

console.log("Solucion Punto #6");

var alto1;
var ancho1;
var total;


alto1 = parseInt(prompt("Favor de ingresar lo alto") );
ancho1 = parseInt(prompt("Favor ingresar lo ancho") );
total = (alto1 * ancho1) * 22000
console.log("El Total a pagar es de: " + total + "$");

console.log("Solucion Punto #7/a");

var cm;
var resultadoxd;
cm = parseInt(prompt("Favor ingresar la longitud de centimetros que quieres convertir a kilometros"))
resultadoxd = cm*(1/100)*(1/1000)
console.log("Los Centimetros han sido convertidos son " + resultadoxd + "Km")

console.log("Solucion Punto #7/b");

var dl;
var resultadoxd2;
dl = parseInt(prompt("Favor ingresar los decilitros que quieres convertir a litro"))
resultadoxd2 = dl*(0.1/1.0)
console.log("Los Decilitros han sido convertidos son " + resultadoxd2 + "L")

console.log("Solucion Punto #7/c");

var mg;
var resultadoxd3;
mg = parseInt(prompt("Favor ingresar los microgramos que quieres convertir a gramos"))
resultadoxd3 = mg*(1.0/1000000)
console.log("Los Microgramos han sido convertidos son " + resultadoxd3 + "G")

console.log("Solucion Punto #7/d");

var kilo;
var resultadoxd4;
kilo = prompt("Favor ingresar los kilometros que quieres convertir a milimetros")
resultadoxd4 = kilo*1000000
console.log("Los Kilometros han sido convertidos son " + resultadoxd4 + " mm")
