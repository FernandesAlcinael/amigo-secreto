let XAmigo = document.getElementById("amigo"); 
let YListaAmigos = document.getElementById("listaAmigos"); 
let ZListaSorteio = document.getElementById("resultado");

let amigos = [];

//função adicionar
function adicionar() {
    
    const amigo = XAmigo.value;
    // Caso esteja o campo esteja vazio, solicita dados
    if (XAmigo.value == '') {
        alert('Informe o nome dos seus amigos!');

    } else {
        if (amigo && !amigos.includes(amigo.toUpperCase())) {
            amigos.push(amigo.toUpperCase());
            YListaAmigos.textContent = amigos.join(", ");
            XAmigo.value = "";
        }
    }
}
//função sortear
function sortear() {
    ZListaSorteio.innerHTML = "";

    embaralhaArray(amigos);
    // solicita no mínimo 3 nomes
    if (amigos.length < 3) {
        alert('Precisamos de no minimo 3 amigos para o jogo! (+_+)');
    } else {
        for (i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                ZListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
            } else {
                ZListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
            }
        }
    }
}

// utiliza a função random() para sorteio aleatório
function embaralhaArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// função reinicia o sorteio
function reiniciar() {
    amigos.length = 0;
    ZListaSorteio.innerHTML = "";
    XAmigo.value = "";
    YListaAmigos.textContent = "";
}