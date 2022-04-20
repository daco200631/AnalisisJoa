/* Es una estructura que almacena cualquier tipo de  dato y cualquier cantidad, es decir  
string, int , doble ,array, ovjetos entre otros, los arreglos o arrays tiene operaciones 
como insertar y eliminar, modificar y consultar
La declaracion de un arreglo se hace mediante un corchete []// Alt+91 y los elemntos dentro de el 
se separan con comas. Tambien se crea o se declara con las palabras reservadas var y let 
seguidas del nombre de la regla */ 
var Miprimerarreglo  =["Jose ",14];
console.log (Miprimerarreglo);
var NotasEst =[["Sofia",4.5],["Mari",4.2]];
console.log( NotasEst);

//Recordar que las posiciones de un vector  o arreglo comienzan desde cero
//Consultar segun posicion
console.log (NotasEst[0][0])
//4.5
// Mari
console.log(NotasEst[0][0]);
console.log(NotasEst[0][1]);
console.log(NotasEst[1][0]);

NotasEst[1][0]="Laura "
console.log(NotasEst[1][0]);

NotasEst[0][1]= 4.5
console.log(NotasEst[0][1]);





//Agregar elemnto al arreglo








//Quiz 
/* Crear un arreglo que contenga los elementos 
-Artista 
-Tecnologia
-Desarrollo
2. Cambiar Desarrollo por 8000
3. Convertir el arreglo para que quede 
-Introduccion 
-Analisis
-Tecnologia
Nota: para cada punto, imprima el arreglo completo*/

var ArregloArTecDes = ["Artista","Tecnologia",8000,"Desarrollo"];
console.log(ArregloArTecDes);
 ArregloArTecDes[0]="Artista";
 console.log(ArregloArTecDes[0]);
 ArregloArTecDes[1]="Tecnologia";
console.log(ArregloArTecDes[1]);
ArregloArTecDes[2]="Desarrollo";
console.log(ArregloArTecDes[2]);
//Punto 2
console.log(ArregloArTecDes);
ArregloArTecDes[4]="8000"
console.log(ArregloArTecDes[4])



console.log("1: Falso")
console.log("2: Falso")
console.log("3: Verdadero")
console.log("4: Verdadero")
console.log("5: Verdadero")
console.log("6: Falso")
console.log("7: Verdadero")
console.log("8: Verdadero")
console.log("9: Falso")
