const calcular = document.getElementById("calcular")


// Procura todo tipo de informação

const calcular = document.querySelector(".calcular>div")

const calcular = document.querySelector("calcular")

// Procura todo tipo de informação

// Capturar o click


// Função

function calcularIMC(peso, altura) {
    return (peso * altura ** -2).toFixed(2)
}

function exibirIMC() {

    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const resultado = document.getElementById("resultado")

    if (nome.trim() !== "" && altura !== NaN && peso !== NaN) {

        const imc = peso / ( altura ** 2)

    } else {

        alert("Preencha todos os campos.")

    }

    let classificacao = ""

    if (imc < 18.5) {

        classificacao = "abaixo do peso."

    } else if (imc < 25) {

        classificacao = "com peso ideal. Parabéns!"

    } else if (imc < 30) {

        classificacao = "levemente acima do peso."

    } else if (imc < 35) {

        classificacao = "com obesidade grau I."
        
    } else if (imc < 40) {

        classificacao = "com obesidade grau II. Cuidado!"

    } else {
        classificacao = "com obesidade grau III. Cuidado!"
    }

    resultado


    alert("Olá Mundo!!!")

}

calcular.addEventListener('click', calcularIMC)

//                               Função

// Ou

document.getElementById("calcular")
    .addEventListener("click", exibirIMC)