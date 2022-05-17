//David Peña
//Taller Condiconales
//1.Cree un ciclo while que se repita 7 veces, en cada vez debe imprimir el número de repeticiones que lleva.
console.log("Punto 1")

var vex
vax = 0
while(vax<7){
    console.log("El contador va en "+vax)
    vax +=1
}

//2.Diseñe un ciclo while cuyo incremento vaya de tres en tres e imprima los múltiplos de 3 desde el 0 hasta el 30.
console.log("Punto 2")

var nume
nume = 0

while(nume<=30){
    console.log("El contador va en "+ nume)
    nume +=3
}

//3.Escriba un ciclo que imprima los números pares hasta el 50
console.log("Punto 3")

var nom 
nom = 0 
 while(nom<=50){
     console.log("El contador va en "+ nom)
     nom+=2
 }

console.log("Punto 4")

var NumbeR
NumbeR = 1
var Pregunta
Pregunta=prompt("Digite un el limite de repeticiones que desea")

while(NumbeR<Pregunta){
NumbeR+=1
if(NumbeR % 2==1){
    console.log("Los numero impares son " + NumbeR)
}
}
//5.
console.log("Punto 5")

var mon

mon=prompt("Digite un numero impar para parar")

while(mon%2!==1){
    console.log("El numero par es "+ mon)
    mon=prompt("Digite un numero impar para parar")
}
console.log("El numero impar es "+ mon)

//6.
console.log("Punto 6")
var cantidadestudiantes=prompt("Ingese la cantidad de estudiantes que hay en su salon")
var acu=0
var ciclo6 = 0

while(ciclo6<cantidadestudiantes){
     var EDAD=parseInt(prompt("Ingrese la edad del estudiante"))
     acu +=EDAD
     ciclo6+=1
} 
console.log("La suma de las edades es "+ acu)

//7.
console.log("Punto 7")
var respuestapersona
var respuesta = "Salchipapa"
var intentos = 0
while(respuestapersona!=respuesta){
respuestapersona=prompt("Cual crees que es la respuesta")
intentos +=1
console.log("El numero de intentos realizado es " + intentos)
 }

//8
console.log("Punto 8")
var profesor=prompt("ingrese el nombre del estudiante")
var acu = 0
var contadorR = 0
var cantidadnotas = prompt("Ingrese la cantidad de notas del estudiante ")

while(contadorR<cantidadnotas){
    var notas = parseFloat(prompt("Ingrese las notas"))
    acu+=notas
    contadorR+=1
}

var promedio = acu/cantidadnotas
console.log("Promedio")
if(promedio>=3.5){
    console.log("El estuadiante "  + profesor + " gano la materia con una nota de " + promedio)
}else{("El estuadiante "  + profesor + " gano la perdio con una nota de " + promedio)}
