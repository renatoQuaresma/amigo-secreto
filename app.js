//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos...
let amigos = [];

// Função para adicionar um amigo à lista...
function adicionarAmigo() {
    input = document.getElementById('amigo');
    nome = input.value;

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = '';
}

// Função para atualizar a lista de amigos exibida na página...
function atualizarLista() {
    listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto...
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione alguns nomes...');
        return;
    }

    indiceSorteado = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceSorteado];

    resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}
