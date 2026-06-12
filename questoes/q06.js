const formCaracteristicas = document.querySelector("#caracteristicas")
const divIMC = document.querySelector("#div-resultado")

formCaracteristicas.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    const dadosForm = new FormData(formCaracteristicas)

    const altura = dadosForm.get('altura')
    const peso = dadosForm.get('peso')
    var alturaM = altura/100
    var imc = parseFloat(peso) / (parseFloat(alturaM)**2)
    var classificacao = ''

    if (imc < 20) {
        classificacao = 'abaixo do peso'
    }
    else if (imc >= 20 && imc < 25) {
        classificacao = 'normal'
    }
    else if (imc >= 25 && imc < 30) {
        classificacao = 'excesso de peso'
    }
    else if (imc >= 30 && imc < 35) {
        classificacao = 'obesidade'
    }
    else if (imc >= 35) {
        classificacao = 'obesidade mórbida'
    }

divIMC.innerHTML = "IMC: " + imc.toFixed(2) + "<br>" + "Classificação: " + classificacao


})