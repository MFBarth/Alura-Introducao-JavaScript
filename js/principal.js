var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso > 100) {
    console.log("Peso Inválido");
    tdImc.textContent = "Peso Inválido";
    pesoEhValido = false;
};

if (altura <=0 || altura > 3) {
    console.log("Altura Inválida");
    tdImc.textContent = "Altura Inválida";
    alturaEhValido = false;
};

if (pesoEhValido && alturaEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}