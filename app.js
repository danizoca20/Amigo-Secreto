const amigos = [];

function adicionar() {
    const campo = document.getElementById("amigo");
    const nome = campo.value;
    const lista = document.getElementById("listaAmigos");

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    amigos.push(nome);

    const item = document.createElement("li");
    item.textContent = nome;

    lista.appendChild(item);

    campo.value = "";
}

function sortear() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome!");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.textContent = "Amigo sorteado: " + amigoSorteado;
}

function reiniciar() {
    amigos.length = 0;

    document.getElementById("listaAmigos").textContent = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("amigo").value = "";
}