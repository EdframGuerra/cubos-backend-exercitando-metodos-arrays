// Crie uma função que receba dois parâmetros, o primeiro sendo um array de nomes e o segundo um número inteiro.
//  A função deverá dividir o array em grupos com a quantidade de nomes de acordo com o numero passado no segundo parâmetro.
//  Caso não seja possível separar em grupos iguais, o último grupo será o restante dos nomes. 
// A função deve imprimir o resultado da divisão dos grupos.

// verificar a quantidade de nomes no Array;
// distribbuir os nomes nos grupos;


const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'ando', 'peco', 'yan'];
const tamanhoDoGrupo = 4;

function divisãoDeGrupos(nomes, tamanhoDoGrupo) {
    let grupo1 = nomes.slice(0, tamanhoDoGrupo);
    let grupo2 = nomes.slice(tamanhoDoGrupo,);

    console.log(`Grupo 1: ${grupo1.join(", ")}`);
    console.log(`Grupo 2: ${grupo2.join(", ")}`);
}

divisãoDeGrupos(nomes, 6);