// Crie uma função que receba três argumentos: 
// 1 - a lista de todos os pacientes na fila, 
// 2 - tipo de operação para um paciente, que pode ser atender ou agendar 
// e o nome do paciente.
// Caso a operação informada seja agendar, o paciente em questão deverá ser adicionado ao final da lista. 
// Caso seja atender, o próximo (primeiro) paciente da fila deverá ser removido e não é obrigatório informar o nome do paciente na função.

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

let agendamento = "agendar";
let atendimento = "atender";


function atendimentoMedico(lista, nome) {
    // if (tipoDeOperacao == "agendar") {
    //     lista.push(nome);
    // } else {
    //     lista.shift();
    // }
    // console.log(lista.join(", "));

    if (nome) {
        lista.push(nome);
    } else {
        lista.shift();
    }
    console.log(lista.join(", "));
}

atendimentoMedico(pacientes)
atendimentoMedico(pacientes)
atendimentoMedico(pacientes)
atendimentoMedico(pacientes, "Zé")
atendimentoMedico(pacientes, "Yan")





