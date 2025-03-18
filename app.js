let amigos = []; //definicion de una lista vacia para almacenar los nombres delos amigos

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Amigo Secreto'

// definicion de la funcion que agrega los nombres de los amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre valido.");
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
        let elementoLista = document.createElement("li");
        elementoLista.textContent = amigo;
        listaAmigos.appendChild(elementoLista);
    }
}

// defincion de la funcion que sortea los nombres de los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agregue amigos válidos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>El Amigo Secreto sorteado es: ${amigoSorteado}</li>`;
}

//Listo :), fin del codigo
// Hecho por Arturo Felipe Jacinto :))