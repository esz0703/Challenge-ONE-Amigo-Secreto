let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroAleatorio];
    let textoResultado = `O amigo secreto sorteado é: ${amigoSorteado}`;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = textoResultado
}