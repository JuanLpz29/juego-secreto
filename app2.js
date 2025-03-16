let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java','Ruby','GoLang');
let lista1 = [];
let lista2 = [];
let lista3 = [];

function muestraLenguajes(){
    for (i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

function muestraInverso(){
    for (i = lenguajesDeProgramacion.length-1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

function calculaPromedio(){
    for (i = 0; i < 5; i++) {
        listaGenerica.push(parseInt(prompt('Ingrese un número:')));
    }
    let suma = 0;
    for (i = 0; i < listaGenerica.length; i++) {
        suma += listaGenerica[i];
    }
    console.log("Promedio es: ",suma / listaGenerica.length);
    let masPequeño = Math.min(...listaGenerica);
    console.log("El número más pequeño es: ",masPequeño);
    let masGrande = Math.max(...listaGenerica);
    console.log("El número más grande es: ",masGrande);
    console.log("La suma de los números es: ", suma);
}

function devuelvePosicion(){
    let num = parseInt(prompt('Ingrese un número: '));
    if (listaGenerica.includes(num)) {
        console.log("El número ",num," está en la posición ",listaGenerica.indexOf(num));
    } else {
        console.log("El número ",num," no está en la lista.", listaGenerica.indexOf(num));
    }
}

function sumaListas(){
    let lista4 = [];
    let largoListas = parseInt(prompt('Ingrese la cantidad de números que desea sumar: '));
    for (i = 0; i < largoListas; i++) {
        lista1.push(parseInt(prompt('Ingrese un número para la lista 1:')));
        console.log("Lista 1: ", lista1);
        lista2.push(parseInt(prompt('Ingrese un número para la lista 2:')));
        console.log("Lista 2: ", lista2);
    }
    for (i = 0; i < lista1.length; i++) {
        lista3.push(lista1[i] + lista2[i]);
        lista4.push(lista1[i]*lista1[i]);
    }
    console.log("La lista con las sumas es: ", lista3);
    console.log("La lista con los cuadrados es: ", lista4);
}
muestraLenguajes();
console.log('-------------------');
muestraInverso();
//calculaPromedio();
//devuelvePosicion();
sumaListas();