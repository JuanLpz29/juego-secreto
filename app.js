let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUser = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof numeroUser);
    console.log(typeof numeroSecreto);
    if (numeroUser === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número con ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó el número secreto
        if (numeroUser > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor.');
        } else {
            asignarTextoElemento('p','El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //dejamos vacia la caja cuando el usuario no acierta el número secreto con .value = ''
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log("Lista -->", listaNumerosSorteados);
    
//Si ya sorteamos todos los números
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p','Se han sorteado todos los números, reinicia el juego.');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
    else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } 
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Setear instrucciones y condiciones del juego
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);


}




