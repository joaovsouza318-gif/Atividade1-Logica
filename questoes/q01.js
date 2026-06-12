const formNumeros = document.querySelector("#numeros")
const divResultado = document.querySelector("#div-resultado")

formNumeros.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    const dadosForm = new FormData(formNumeros)

    const num1 = dadosForm.get('num1')
    const num2 = dadosForm.get('num2')
    const num3 = dadosForm.get('num3')

var media = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3
divResultado.innerHTML = media.toFixed(2)

})