//Taller
//1.
var CantSaludos = 0;
 
while(CantSaludos < 5){
    console.log("2 ");
    CantSaludos +=1 ;
}
//2.
var Rnumero = 0
while(Rnumero <8){
     console.log(Rnumero)
     Rnumero +=1
}   



//3.
var num = 0
while(num<20){
   console.log("2")
    num+=2
}

//4.
/*var ok = "si"
while(ok != "ok"){
ok=prompt("ingrese ok para")
console.log("Dijo " + ok)
}
console.log("Dijo ok")*/    

//5.

/*var cinco = 1 
while(cinco>0){
    cinco=prompt("Ingrese un numero negativo para parar ")
    console.log("El numero es " + cinco)
}
 */
//6

/*var suma = 0
var uno 
var dos 
while(suma<=20){
    uno=paraInt(prompt("valor2"))
    dos=paraInt(prompt("valor2"))
    suma=uno+dos
    console.log(suma)
}*/
//7
var contraseña = "Astroperro"
var Intento = prompt("Ingrese una contraseña")
var n
while(Intento !=contraseña){
 console.log("La contraseña es incorrecta")
 Intento=prompt("Ingerse una nueva contraseña")
}
console.log("Contraseña correcta ")