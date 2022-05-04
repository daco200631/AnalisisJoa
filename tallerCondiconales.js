//TALLER
//David Peña

//Enunciados
//1.Dada el siguiente código, asigne un valor a la variable para que el mensaje sea impreso en la consola del navegador

var saludar = "si"
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}
//2.Con base en este código, complete la condición para que sea verdadero y pueda imprimirse el mensaje.

var x=20;
 
if(x<=20){
    console.log("La condición es verdadera");
}
//3.Asigne un valor a la variable que le permita entrar al lugar.
var edad = 20
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{
    console.log("No cumple con la edad, no puedes entrar")
}

//4.Escriba las condiciones correctas para que cada mensaje se muestre de manera correcta. (condicionales simples)

var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2>0) {
  console.log("numero2 es positivo");
}
if(numero1!=0) {
  console.log("numero1 es negativo o distinto de cero");
}
if((numero1+1)<=numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//5.Escriba las condiciones correctas para que imprima cada mensaje de manera correcta (condicional múltiple).

var numerito = 100;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>=50 && numerito <= 80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>=80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito=100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}

//6.
var numerito = 90;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>=50 && numerito <= 80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>=80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito=100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}

//7. 

var numerito = 70;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>=50 && numerito <= 80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>=80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito=100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}
 //8. 

 var numerito = 101;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>=50 && numerito <= 80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>=80 && numerito<100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else{ 
    console.log("numerito es estrictamente mayor a 100");
}

//9.

var diaSiguiente= "Jueves";
var Poli = "No puede ir al polideportivo";
 
if(diaSiguiente == "Jueves")
   Poli = "Puede ir al polideportivo"

   console.log("Como hoy es " +  diaSiguiente +","+  Poli )

   //10.

  
var PrimerNumero
var SegundoNumero
var Conciente
PrimerNumero = 10
SegundoNumero = 0


if (  SegundoNumero == 0){
      console.log("No se puede hacer la division")
}else{
      
  Conciente = PrimerNumero/SegundoNumero
    console.log(Conciente)
}

//11

var dia
var platodia
dia="monday"

if (dia == "Lunes"){
  platodia = "Arroz con pollo"
  console.log("El plato del dia es " + platodia)
} else if (dia == "Martes"){
  platodia="Chuleta de cerdo"
  console.log("El plato del dia es " + platodia)
}else if (dia=="Miercoles"){
  platodia="Frijoles"
  console.log("El plato del dai es " +platodia)
} else if (dia=="Jueves"){
  platodia="Sancocho de Pesacado"
  console.log("El plato del dia es " + platodia)
} else if (dia=="Viernes"){
  platodia="Bandeja paisa"
  console.log("El palto del dia es " + platodia)
} else if (dia=="Sabado"){
  platodia="Ajiaco"
  console.log("El plato del dia es " + platodia)
} else if (dia=="Domingo"){
  platodia="Sancocho del Gallina"
  console.log("El plato del dia es " + platodia)
} else {console.log("Ta cerrao")}

//12
var algo
algo = "b"
if(algo==1 || algo == 2 ||algo==3||algo==4||algo==5||algo==6||algo==7||algo==8||algo==9||algo==0){
  console.log("Es un numero")
} else if (algo=="a"||algo=="e"||algo=="i"||algo=="o"||algo=="u"){
  console.log("Es una vocal")
} else {(console.log("Es una consonante"))}