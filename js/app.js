const amigos = [];

function adicionar() {
    const campo = document.getElementById("nome-amigo");
    const nome = campo.value;
    const lista = document.getElementById("lista-amigos");

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

    const resultado = document.getElementById("lista-sorteio");
    resultado.textContent = "Amigo sorteado: " + amigoSorteado;
}

function reiniciar() {
    event.preventDefault();

    amigos.length = 0;

    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
    document.getElementById("nome-amigo").value = "";
}