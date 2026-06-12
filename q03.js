const formDados = document.querySelector("#dados")
const divAnalise = document.querySelector("#div-resultado")

formDados.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    const dadosForm = new FormData(formDados)

    const distancia = dadosForm.get('distancia')
    const consumo = dadosForm.get('consumo')
    const preco = dadosForm.get('preco')

var litros = parseFloat(distancia) / parseFloat(consumo)
var valor = litros * parseFloat(preco)
divAnalise.innerHTML = "A quantidade de Litros para percorrer essa distância é de: "+ litros +" já o valor gasto para percorrer a distância é: R$ " + valor.toFixed(2)

})