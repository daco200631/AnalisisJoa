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
var gradoEstudiante =// prompt("ingrese un grado: ");
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
//Operadores 
//Suma 
var suma; 
suma = 5+3; 
console.log(suma);
let a = 10
suma = 8 + a
suma = a + 8
console.log (suma);
let b = 20;
suma = a + b;
console.log (suma);
//RESTA
let resultado;
resultado = a - b;
console.log (resultado);
resultado = b - a;
console.log (resultado);
//Multiplicacion
var Producto 
Producto = a * b 
console.log ( Producto);
//Division
var Division;
Division = b/a 
console.log (Division);
// Orden de operaciones
var res
res = a * 2; // 20
console.log (res);
res = a * 2 - 1; //19
console.log ( res);
res = a * (2 - 1); //10 
console.log (res);
//Residuo 
var Residuo
Residuo = 12 % 2; 
console.log (Residuo);
//Contadores
//Incremento 
var Incre 
Incre = 1;
console.log (Incre);
Incre = Incre + 1;
console.log (Incre);
Incre += 1;
console.log (Incre);
Incre ++;
console.log (Incre);
var decre 
decre = 15;
console.log (decre);
decre = decre - 5;
console.log (decre);
decre -= 5;
console.log (decre);
decre --;
console.log(decre);
//Operaciones aumentadas 
// Son operaciones que ses le realizan a una variable y el resultado se guarda en si mismo
var sumaaumento;
var sumaaumento = 0;
sumaaumento += 2;
sumaaumento += 50; //la variable debe tener antes de realizar la operacion
console.log (sumaaumento);
var Restaaumento
Restaaumento = 20;
Restaaumento -= 1;
Restaaumento -= 8
console.log (Restaaumento);
ConcienteAummneto = 20;
ConcienteAummneto /= 1;
ConcienteAummneto /= 8
console.log (ConcienteAummneto);
//Potencia
var exp;
exp = 3**2; //3^2 o 3^2
console.log (exp); //9
exp = 3**3; //3^3 0 3^3
console.log (exp); //27
//Cadenas o texto 
//Suma de cadenas 
var nombre = "David"
var apellido = "Peco"
var nomCompleto = nombre + " " + apellido;
console.log (nomCompleto); 
var cadena1 = "3";
var cadena2 = "5";
var Cadenatotal = cadena1 + cadena2
console.log (Cadenatotal);
//.Lengt 
console.log (nomCompleto.length);
console.log (nombre[0]);
//Para encontrar el caracter en la ultima posicion de una cadena o un vector se debe buscar 
//la longitud -1 (.lengt-1)
console.log (nombre[nombre.length -1]);