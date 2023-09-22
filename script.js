console.log("Hola Mundo");

// Declaracion de funciones
function cruzarCalle(){
    // semaforo
        let color = prompt("Introduzca color");

    if (color == "green") {
        console.log("Pasar");
    }  else if(color == "yellow"){
        console.log("Pasar rápido");
    }
    else if(color == "blue"){
        console.log("Pasar saltando");
    }
    else { // Valor por defecto
        console.log("No pasar")
    }
}

function cruzarCalle2(color){
    // semaforo

    if (color == "green") {
        console.log("Pasar");
    }  else if(color == "yellow"){
        console.log("Pasar rápido");
    }
    else if(color == "blue"){
        console.log("Pasar saltando");
    }
    else { // Valor por defecto
        console.log("No pasar")
    }
}

function cruzarCalleSwitch(){
    // semaforo
        let color = prompt("Introduzca color");

        switch (color) {
            case "green":
                console.log("Green: Pasar");
                break;
            case "yellow":
                console.log("Yellow: Pasar rápido");
                break;
            case "blue":
                console.log("Pasar saltando");
                break;
            default:
                console.log("No pasar");
                break;
        }
}

function encenderPC() {
    // 3 condiciones --> green,yellow,red
    let option = prompt("Introduzca opción");

    switch (option) {
        case "reset":
            console.log("F.Reinicia sistema");
            // Logica de reinicio de sistema
        case "start":
            console.log("F.Enciende PC");
        case "login":
            console.log("F.Loguearse en el sistema");
            break;

        default:
            console.log("Error de PC");
            break;
    }
}

// 0, 1, 2, .......9 -> N=10
// 0..... N-1

// for (let i = 0; i < 10; i++ ) {  // N = 10
//     console.log("El número es:" +i)
    
// }

// for (let i = 0; i <= 10; i++ ) {  // N = 11
//     console.log("El número es:" +i)
    
// }

// for (let i = 0; i < 11; i++ ) { // N = 11
//     console.log("El número es:" +i)
    
// }

// for (let i = 1; i <= 9; i++ ) { //N = 9
//     console.log("El número es:" +i)
    
// }
// cmd + k + u para descomentar

function printYears() {
    for (let i = 1996; i <= 2022; i++) { // N = 26

        if (i % 2 == 0) { //Impares
            continue; // como un "break" solo para iteracion actual
        }

        if (i > 2011) {
            break;
        }
        console.log("Año " + i);
    }
}

function ejemploWhile() {

    let i = 1996; // variable de bucle
    while (i <= 2022) { // condicion de parada

        if (i % 2 == 0) {
            i++;
            continue;
        }

        if (i > 2011) {
            break;
        }

        console.log("Año " + i);
        i++; // incremento variable de bucle. Si lo comentas, bucle infinito
    }
}

// Bucle infinito
// while(true){
//     console.log("hola");
//     let mensaje = prompt("introduce algo");
//     if(mensaje.length > 0){ // para ver si el mensaje tiene algo
//         console.log("Gracias. has enviado: "+mensaje);
//         break; // rompe bucle
//     }else{
//         console.log("No enviaste nada");
//     }
// }

// comprobar nombre con solo 3 intentos
function comprobarNombre() {
    let intentos = 0;
    while (intentos < 3) {
        let nombre = prompt("introduce nombre");
        if (nombre != "") {
            console.log("Nombre: " + nombre);
            break;
        }

        intentos++;
    }
}

//1......N veces
function ejemploDoWhile() {
    i = 0;
    let text = "";
    do {
        text += "The number is " + i + "\n";
        console.log(text);
        i++;
    }
    while (i < 10);
}

// Llamada a las funciones/ejecucion de funciones
// cruzarCalle();
// console.log("Ejecuta cruzarCalle2");
// cruzarCalle2("yellow");
// cruzarCalleSwitch();
// encenderPC();
// printYears();
// ejemploWhile();