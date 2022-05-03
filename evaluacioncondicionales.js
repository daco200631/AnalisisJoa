//David Peña
//1.(0,5) Complete la condición para que el mensaje pueda imprimirse.

var ValorVariable= 350;
 
if (ValorVariable > 349){
   console.log("La condición es verdadera")
}

//2.

var valor 
valor = 20
 
if (valor >= 20 || valor <= 5){
   console.log("El valor es correcto")
}

//3.


var numero = 50
 
if (numero === 40){
   console.log('El número es igual que "40" en valor y tipo');
}else if(numero>10 && numero<50){
    console.log('El número es mayor que 10 y menor a 50');
}else if(numero==9 || numero<8){
    console.log("El número es igual que 9 o menor igual que 8");
}else if(numero>=50){
    console.log("El número es mayor igual que 50");
}

//Respuesta 3.A
numero=40
//Respuesta 3.B
    numero=11
//Respuesta 3.C
    numero=9
//Respuesta 3.D
    numero=50

//4.  

var num1ro
var num2ro
var resultado
num1ro=1
num2ro=2

if (num1ro==num2ro) {
    console.log("Los numeros son iguales")
} else resultado = num1ro + num2ro
console.log(resultado)

//5.

var tipopersona;
var obsequio;
 tipopersona = "Adulto"

 if (tipopersona == "Infante") {
     obsequio = "juquete"
     console.log("El " + tipopersona + " recibira un " + obsequio)
 }else if(tipopersona == "Joven") {
     obsequio = "Audifonos"
     console.log("El " + tipopersona + " recibira un " + obsequio)
 }else if(tipopersona == "Adulto") {
     obsequio = "Bono para cena en pareja"
     console.log("El " + tipopersona + " recibira un " + obsequio)
 }else if(tipopersona == "Adulto mayor"){
     obsequio = "Paseo a sitio turistico"
     console.log("El " + tipopersona + " recibira un " + obsequio)
 } else  console.log("No es valido el obsequio") 
 
 //6.

 var pulgadas
 var domicilio
 var totalpagar
pulgadas = 88
domicilio = 24000
 if (pulgadas == 37){
    totalpagar 
    =domicilio+500000
    console.log("El valor del televisor junto con la instalacion es " + totalpagar)
 } else if (pulgadas == 42) {
     totalpagar=domicilio+820000
     console.log("El valor del televisor junto con la isntalacion es " + totalpagar)
 } else if (pulgadas == 55) {
     totalpagar=domicilio+1500000
     console.log("El valor del televisor junto con la instalacion es ") + totalpagar
 } else if (pulgadas == 75) {
     totalpagar=domicilio+3000000
     console.log("El valor del televisor junto con la instalacion es "+ totalpagar)
 } else console.log("No tenemos dichas pulgadas en un televisor")
