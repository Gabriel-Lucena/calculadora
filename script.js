

const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const massa = document.getElementById("massa") 
const imc = document.getElementById("botao")
const resultado = document.getElementById("resultado")

function calculadorDeImc (massa, altura) {

    return parseFloat((massa * altura ** -2)).toFixed(2)

}

function testador (number, name) {
    
        if (number > 40) {

            return name + ", seu IMC é " + number + " e você está com obesidade grau III."

        } else if (number >= 35 ) {

            return name + ", seu IMC é " + number + " e você está com obesidade grau II."

        } else if (number >= 30) {

            return name + ", seu IMC é " + number + " e você está com obesidade grau I."

        } else if (number >= 25) {

            return name + ", seu IMC é " + number + " e você está acima do peso."

        } else if (number >= 18.5) {

            return name + ", seu IMC é " + number + " e você está com o peso ideal."
 

        } else {

            return nome.value + ", seu IMC é " + number + " e você está abaixo do peso."

        }

}

function calculadoraDeImc() {
    
    if ( altura.value !== '' && massa.value !== '' && nome !== "") {

        // const imc = parseFloat(massa.value) * (parseFloat(altura.value) ** -2 ).toFixed(2)

        const imcReal = calculadorDeImc(massa.value, altura.value)
        resultado.textContent = testador(imcReal, nome.value)

        return resultado

        // if (imcReal > 40) {

        //     resultado.textContent = nome.value + ", seu IMC é " + imcReal + " e você está com obesidade grau III."

        // } else if (imcReal >= 35 ) {

        //     resultado.textContent = nome.value + ", seu IMC é " + imcReal + " e você está com obesidade grau II."

        // } else if (imcReal >= 30) {

        //     resultado.textContent = nome.value + ", seu IMC é " + imcReal + " e você está com obesidade grau I."

        // } else if (imcReal >= 25) {

        //     resultado.textContent = nome.value + ", seu IMC é " + imcReal + " e você está acima do peso."

        // } else if (imcReal >= 18.5) {

        //     resultado.textContent = nome.value + ", seu IMC é " + imcReal + " e você está com o peso ideal."
 

        // } else {

        //     resultado.textContent = nome.value + ", seu IMC é " + imcReal + " e você está abaixo do peso."

        // }

    } else {

        alert("Preencha os campos corretamente!")

    }

}


imc.addEventListener("click",calculadoraDeImc)
console.log(resultado)



