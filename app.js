let amigos = [];

function agregarAmigo(){
    let numeroUsuario  = document.getElementById('amigo').value.trim();

    if (numeroUsuario === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(numeroUsuario);
    console.log(amigos);
    limpiarCaja();

    listarAmigos();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function listarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {

    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
