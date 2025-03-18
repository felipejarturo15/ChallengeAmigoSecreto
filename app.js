let amigos = [] //definicion de una lista vacia para almacenar los nombres delos amigos

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Amigo Secreto'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'indica un numero del 1 al 10'

// definicion de la funcion que agrega los nombres de los amigos
function agregarAmigo() {
    let amigoAgregado = document.getElementById("amigo").value;
    
    if (nombreAmigo === "") {
        elert("Por favor, inserte un nombre valido.");
        return;
    }

    amigos.push(nombreAmigo); //actualizar el aarayy de amigos
document.getElementById("amigo").value = "";
actualizarListaAmigos();

}

//definicion de la funcion que actualiza la lista de los amigos insertados en el input
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        let elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    }
}

// defincion de la funcion que sortea los nombres de los amigos
function sortearAmigo() {
    if (amigos.lenght === 0) {
        alert("Por favor, agregue amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.lenght);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}

//Listo :), fin del codigo
// Hecho por Arturo Felipe Jacinto :))