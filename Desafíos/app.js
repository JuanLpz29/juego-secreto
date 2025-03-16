
function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id); 
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarInputs() {
    document.getElementById('primero').value = '';
    document.getElementById('segundo').value = '';
    document.getElementById('resultado').innerHTML = '';
}

function mostrarIMC() {
    asignarTextoElemento('title', 'Calculadora de IMC');
    asignarTextoElemento('instrucciones', 'Ingresa tu peso y altura');
    document.getElementById('primero').style.display = 'initial';
    document.getElementById('segundo').style.display = 'initial';
    document.getElementById('primero').placeholder = 'Peso en Kg (ej. 71.5)';
    document.getElementById('segundo').placeholder = 'Altura en metros (ej. 1.77)';
    document.getElementById('calcular').setAttribute('onclick', 'calculaIMC()');
    limpiarInputs();
}

function calculaIMC() {
    let peso = parseFloat(document.getElementById('primero').value);
    let altura = parseFloat(document.getElementById('segundo').value);
    let imc = peso / (altura * altura);
    asignarTextoElemento('resultado', `Tu IMC es: ${imc}`);
    return;
}

function mostrarFactorial() {
    asignarTextoElemento('title', 'Calculadora de Factorial');
    asignarTextoElemento('instrucciones', 'Ingresa un número');
    document.getElementById('primero').placeholder = 'Número';
    document.getElementById('primero').style.display = 'initial';
    document.getElementById('segundo').style.display = 'none';
    document.getElementById('calcular').setAttribute('onclick', 'calculaFactorial()');
    limpiarInputs();
}


function calculaFactorial() {
    let numero = parseInt(document.getElementById('primero').value);
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    asignarTextoElemento('resultado', `El factorial de ${numero} es: ${factorial}`);
    return;
}

function mostrarConverter() {
    asignarTextoElemento('title', 'Convertidor de Moneda');
    asignarTextoElemento('instrucciones', 'Ingresa la cantidad de dólares:');
    document.getElementById('primero').placeholder = 'Ingresa USD para convertirlo en CLP (Ej. 100)';
    document.getElementById('primero').style.display = 'initial';
    document.getElementById('calcular').setAttribute('onclick', 'calculaMoneda()');
    limpiarInputs();
}

function calculaMoneda() {
    let usd = parseFloat(document.getElementById('primero').value);
    let clp = usd * 934.58;
    asignarTextoElemento('resultado', `Tienes ${clp} CLP`);
    return;
}

function mostrarAP() {
    asignarTextoElemento('title', 'Calculadora de Área y Perímetro');
    asignarTextoElemento('instrucciones', 'Ingresa la altura y el ancho de un rectángulo');
    document.getElementById('primero').placeholder = 'Altura';
    document.getElementById('segundo').placeholder = 'Ancho';
    document.getElementById('primero').style.display = 'initial';
    document.getElementById('segundo').style.display = 'initial';
    document.getElementById('calcular').setAttribute('onclick', 'calculaAP()');
    limpiarInputs();
}

function calculaAP() {
    let altura = parseFloat(document.getElementById('primero').value);
    let ancho = parseFloat(document.getElementById('segundo').value);
    let area = altura * ancho;
    let perimetro = 2 * (altura + ancho);
    asignarTextoElemento('resultado', `El área del rectángulo es: ${area} y el perímetro es: ${perimetro}`);
    return;
}

function mostrarAP2() {
    asignarTextoElemento('title', 'Calculadora de Área y Perímetro');
    asignarTextoElemento('instrucciones', 'Ingresa el radio de un círculo');
    document.getElementById('primero').placeholder = 'Radio del círculo';
    document.getElementById('primero').style.display = 'initial';
    document.getElementById('segundo').style.display = 'none';
    document.getElementById('calcular').setAttribute('onclick', 'calculaAP2()');
    limpiarInputs();
}	

function calculaAP2() {
    let radio = parseFloat(document.getElementById('primero').value);
    let area = 3.14 * radio * radio;
    let perimetro = 2 * 3.14 * radio;
    asignarTextoElemento('resultado', `El área del círculo es: ${area} y el perímetro es: ${perimetro}`);
    return;
}

function mostrarTabla() {
    asignarTextoElemento('title', 'Tabla de Multiplicar');
    asignarTextoElemento('instrucciones', 'Ingresa un número para ver su tabla de multiplicar');
    document.getElementById('primero').placeholder = 'Número';
    document.getElementById('primero').style.display = 'initial';
    document.getElementById('segundo').style.display = 'none';
    document.getElementById('calcular').setAttribute('onclick', 'calculaTabla()');
    limpiarInputs();
}

function calculaTabla() {
    let numero = parseInt(document.getElementById('primero').value);
    let tabla = '';
    for (let i = 1; i <= 12; i++) {
        tabla += `${numero} x ${i} = ${numero * i} <br>`;
    }
    asignarTextoElemento('resultado', tabla);
    return;
}

// Inicializa el contenido de los elementos
asignarTextoElemento('title', 'Práctica de Funciones');
asignarTextoElemento('instrucciones', 'Elige una opción presionando algún botón.');