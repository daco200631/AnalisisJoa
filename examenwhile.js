/*console.log("Punto 1")
 var contador1 = 0
  var num = prompt("Ingrese un numero")
while(contador1<=num){
    if(contador1%5==0)
    console.log(contador1 + " Es multiplo de 5")
    else console.log(contador1 + " No es umltiplo de 5")
    contador1 +=1
}*/

console.log("Punto 2")

/*var contador2 = 0
var cantidadPro=prompt("Ingrese la cantidad de productos que tiene")
var Pfinal = 0
while(contador2<cantidadPro){
    var precioarti=parseFloat(prompt("Ingrese el precio del articulo"))
    Pfinal=precioarti+Pfinal
    contador2+=1
}
   console.log("El total a pagar es "+ Pfinal)

   console.log("Punto 3")
   var Pfinal= 0
   while(cantidadPro!="si"){
       var precioarti = parseFloat(prompt("Ingrese el precio de sus articulos de uno en uno"))
       Pfinal=precioarti+Pfinal
       var cantidadPro=prompt("Si desea para con la compra deiga si")

   }
console.log("El total a pagar  de sus productos es de "+Pfinal)*/

console.log("Punto 4")



var contador4 = 0
var cantidadPro4=prompt("Ingrese la cantidad de productos que tiene")
var Pfinal4 = 0

while(contador4<cantidadPro4){
    var precioarti=parseFloat(prompt("Ingrese el precio del articulo"))
    Pfinal4=precioarti+Pfinal4
    contador4+=1
}
    if(cantidadPro4>=8&&contador4<15){
       
        console.log("El precio con descuento del 10% es de "+ Pfinal4*0.9)
    }else if(cantidadPro4>15&&contador4<25){
   
        console.log("El precio con descuento del 15% es de "+ Pfinal4*0.85)
    }else (cantidadPro4>=25)
  
console.log("El precio con descuento del 20% es de "+Pfinal4*0.8)



   
