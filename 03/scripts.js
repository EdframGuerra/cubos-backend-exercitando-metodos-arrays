const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
let posicao = 3;

function encontrarCarro(nomes, posicao) {
    let listaDeCarros = nomes.slice(posicao, (posicao + 3));
    console.log(listaDeCarros.join(", "));
}


encontrarCarro(nomes, 2);