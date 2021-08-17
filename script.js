

const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const massa = document.getElementById("massa") 
const imc = document.getElementById("botao")
const resultado = document.getElementById("resultado")

function calculadoraDeImc() {
    
    if ( altura.value !== '' && massa.value !== '') {

        const imc = parseFloat(massa.value) / (parseFloat(altura.value) * parseFloat(altura.value) )

        if (imc > 40) {

            resultado.textContent = nome.value + ", seu IMC é " + imc + " e você está com obesidade grau III."

        } else if (imc >= 35 ) {

            resultado.textContent = nome.value + ", seu IMC é " + imc + " e você está com obesidade grau II."

        } else if (imc >= 30) {

            resultado.textContent = nome.value + ", seu IMC é " + imc + " e você está com obesidade grau I."

        } else if (imc >= 25) {

            resultado.textContent = nome.value + ", seu IMC é " + imc + " e você está acima do peso."

        } else if (imc >= 18.5) {

            resultado.textContent = nome.value + ", seu IMC é " + imc + " e você está com o peso ideal."


        } else {

            resultado.textContent = nome.value + ", seu IMC é " + imc + " e você está abaixo do peso."

        }

    } else {

        alert("Preencha os campos corretamente!")

    }

}


imc.addEventListener("click",calculadoraDeImc)
console.log(resultado)



