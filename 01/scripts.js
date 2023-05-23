const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let listaInvertida = frutas.reverse();
console.log(listaInvertida);

let listaString = listaInvertida.join(", ");
console.log(listaString);

frutas.shift();

frutas.pop();

let novaLIstaDeFrutas = listaInvertida.reverse();

frutas.push("Melão");


console.log(novaLIstaDeFrutas);