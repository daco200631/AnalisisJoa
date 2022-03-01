console.log("Hola Mundo");//imprimir Por consola
//comentario en linea
/* comentario
 en
 varias
 lineas
 o
 /*multilinea
 

 //variable
 /*Son espacios de memoria que almacenan datos o informacion 
 Existen vartios tipos de variables en js, pero generalmente  se utilizan los siguientes:
 String:Almacenan cadenas de textos. Se debe declarar o asignar el valor entre comillas 
 Int: Almacenan numeros enteros
 Double: Almacena numeros reales
 Boolean: Almacena valores de verdad (true or false)
 /*
 /*Declarar variables
 declarar una variable es crear, decirle si al lenguaje como se llama la variable e indicarle de que ya existe
 Para declarar una variable se puede utilizar ya sea una palabra reservada var o let
 */
var nombre;
console.log(nombre);
/*inicializar variables 
para inicializar variables es necesario asignar un valor cuando se crea esta variable
*/
var apellido = String("Peña");
console.log(apellido);
/*Asignar un valor: se hace mediante un signo =*/

nombre="David"
console.log(nombre+" "+apellido); 
// Desde otra variable 
var edad = 15;
var edadEstudiante = edad; 
// Desde el teclado 
var gradoEstudiante = prompt("ingrese un grado: ");
console.log ("el grado es: " + gradoEstudiante);
/* Constantes:
Son valores que una vez inicializados no pueden cambiar lo que almacenan. Se crean con la palabra reservada const, el nombre de las constantes se 
escribe todo el mayusculas para diferenciarlo de las variables 
*/
const PI = 3.1416;
//PI =5;
//Imprimir por consola
//simple
console.log ("mensaje");
console.log (nombre);
//con variables concatenado
console.log("Mensaje " + nombre);   

