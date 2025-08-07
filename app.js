// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];



function amigoSorteado() {
    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[randomIndex];
    console.log(amigoSeleccionado);
    inyectarTextoElemento('#resultado', `Tu amigo secreto es: ${amigoSeleccionado}`);


   /* if (!amigos.includes(amigoSeleccionado)) {
        console.log(amigoSeleccionado);
        inyectarTextoElemento('#resultado', `Tu amigo secreto es: ${amigoSeleccionado}`);
        return;  
    } else {
        amigoSorteado();
        return;
    }*/
}



function agregarAmigo() {
    const amigoIngresado = document.getElementById("amigo").value;
    console.log(amigoIngresado);    
    amigos.push(amigoIngresado);
    console.log(amigos); 
    limpiarCampo();
    return;
}



function limpiarCampo(){
        document.querySelector('#amigo').value = "";
        return;
    }

function inyectarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;  
    }
    agregarAmigo();
    amigoSorteado();

    