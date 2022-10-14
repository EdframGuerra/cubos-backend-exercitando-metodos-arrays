
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