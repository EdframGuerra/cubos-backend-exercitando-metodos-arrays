// ) Organize o array na ordem inversa e transforme em uma única string separada por vírgulas de forma q seja impresso
const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// Organize o array na ordem inversa
let listaInvertida = frutas.reverse();
console.log(listaInvertida);

// transforme em uma única string separada por vírgulas de forma q seja impresso
let listaString = listaInvertida.join(", ");
console.log(listaString);

// Remova o primeiro e último item do array original
frutas.shift();
frutas.pop();
let novaLIstaDeFrutas = listaInvertida.reverse();
frutas.push("Melão");
// e adicione a fruta Melão ao novo array da seguinte forma:
console.log(novaLIstaDeFrutas);