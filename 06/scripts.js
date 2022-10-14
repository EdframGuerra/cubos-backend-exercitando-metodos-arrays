const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function donoDoPet(usuarios, nomeDoPet) {
    let encontrou = false;
    for (let item of usuarios) {
        if (item.pets.includes(nomeDoPet)) {
            encontrou = true
            return `O dono(a) do(a) ${nomeDoPet} é o(a) ${item.nome}`
        }

    }
    if (!encontrou) {
        return "`Que pena ${nomeDoPet}, não encontramos seu dono(a)`"
    }

}

console.log(donoDoPet(usuarios, "Max"))