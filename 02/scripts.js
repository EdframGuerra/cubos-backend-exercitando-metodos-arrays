const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'ando', 'peco', 'yan'];

let tamanhoDoGrupo = 4;

function divisãoDeGrupos(nomes, tamanhoDoGrupo) {
    let grupo1 = nomes.slice(0, tamanhoDoGrupo);
    let grupo2 = nomes.slice(tamanhoDoGrupo);

    console.log(`Grupo 1: ${grupo1.join(", ")}`);
    console.log(`Grupo 2: ${grupo2.join(", ")}`);
}

divisãoDeGrupos(nomes, 6);