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