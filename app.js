    // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let amigos = [];


 function agregarAmigo() {
        const amigoIngresado = document.getElementById("amigo").value.trim();
        if (amigoIngresado !== "") {
            amigos.push(amigoIngresado);
        } else {
            inyectarTextoElemento('#resultado', `Ingresa un nombre vàlido.`);
        }   
        console.log(amigos);
        console.log(amigoIngresado);
        limpiarCampo();
        
    }

 



    function amigoSorteado() {
        const randomIndex = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[randomIndex];

        if (amigos.length > 0) { 
        amigos.splice(randomIndex, 1); // Eliminar el amigo seleccionado de la lista
        inyectarTextoElemento('#resultado', `Tu amigo secreto es: ${amigoSeleccionado}`);
        }else {
        inyectarTextoElemento('#resultado', `No hay amigos para seleccionar.`);
        }

    /* if (!amigos.includes(amigoSeleccionado)) {
            console.log(amigoSeleccionado);
            inyectarTextoElemento('#resultado', `Tu amigo secreto es: ${amigoSeleccionado}`);
            return;  
        } else {
            amigoSorteado();
            return;
        }*/
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

        