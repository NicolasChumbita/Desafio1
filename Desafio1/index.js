var miAltura = 180;
var alturaCampazzo = 178;
var estatura = parseInt(prompt("Ingresa tu estatura en cm"));
if (estatura>198) {
    alert("Eres más alto que Manu Ginobili!");
}
else if(estatura > miAltura) {
    alert("Eres más alto que la persona que programó esto");
}
else if (estatura==alturaCampazzo) { 
    alert("Mides lo mismo que Facundo Campazzo flamante jugador de la NBA");
}
else if (estatura == miAltura){
    alert("Mides lo mismo que yo!");
}
else if( estatura<170) {
    alert ( "Sabías que Messi es un poco más alto que vos?");
}
else if (estatura<miAltura) {
    alert ("Eres más bajo que la persona que programó esto");
    }