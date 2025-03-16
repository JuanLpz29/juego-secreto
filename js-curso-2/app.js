let header = document.querySelector('h1');
header.innerHTML = "Practicando JavaScript";

function miFuncion() { 
    console.log("Hola Mundo");
}

function miNombre() { 
    let nombre= prompt("¿Cómo te llamas?");
    alert("¡Hola "+ nombre + "!");
}

function miNum() { 
    let num = parseInt(prompt("Ingresa un número"));
    alert("El doble de "+ num +" es: " + num*2);
    alert("El cuadrado de "+ num +" es: " + num*num);
}

function miProm() { 
    let num1 = parseInt(prompt("Ingresa un número: "));
    let num2 = parseInt(prompt("Ingresa otro número: "));
    let num3 = parseInt(prompt("Ingresa un tercer número: "));
    let prom = (num1 + num2 + num3) / 3;
    alert("El promedio de los números es: " + prom);
}

function elMayor(){
    let num1 = parseInt(prompt("Ingresa un número: "));
    let num2 = parseInt(prompt("Ingresa otro número: "));
    let mayor = Math.max(num1, num2);
    alert("El número mayor es: " + mayor);
}