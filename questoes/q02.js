const formArea = document.querySelector("#medidas")
const divQuantidade = document.querySelector("#div-resultado")

formArea.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    const dadosForm = new FormData(formArea)

    const base = dadosForm.get('base')
    const altura = dadosForm.get('altura')
    const mPerLitro = 2

var area = (parseFloat(base) * parseFloat(altura))
var baldes = area / mPerLitro

divQuantidade.innerHTML = 
"A área a ser pintada é: " + area.toFixed(2) + " m² <br>" + "E para pintá-la precisamos de " + baldes.toFixed(0) + " baldes de tinta"


})