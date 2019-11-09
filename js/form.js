var botaoAdicionar = document .querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPAcienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPacientes(paciente);
    if(erros.length > 0){
        exibeMenssagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();

    var menssagensErro = document.querySelector("#menssagens-erro");
    menssagensErro.innerHTML = "";

});

function obtemPAcienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(dado, classe) {
    var td= document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPacientes(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) erros.push("O nome do paciente não pode estar em branco!");
    if (paciente.peso.length == 0) erros.push("O peso do paciente não pode estar em branco!");
    if (paciente.altura.length == 0) erros.push("A altura do paciente não pode estar em branco!");
    if (paciente.gordura.length == 0) erros.push("A gordura do paciente não pode estar em branco!")
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!");
    if (!validaAltura(paciente.altura)) erros.push("Altura Inválida");

    return erros;
}

function exibeMenssagemDeErro(erros){
    var ul = document.querySelector("#menssagens-erro");
    ul.innerHTML = "";

    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}