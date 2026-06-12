const formLados = document.querySelector("#lados")
const divTipo = document.querySelector("#div-resultado")

formLados.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const dadosForm = new FormData(formLados)

    const lado1 = dadosForm.get('lado1')
    const lado2 = dadosForm.get('lado2')
    const lado3 = dadosForm.get('lado3')

    var tipo = ""
    if (lado1 === lado2 && lado2 === lado3) {
        tipo = "Equilátero"   
} 
    else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        tipo = "Isósceles"
    }
    else {
        tipo = "Escaleno"
    }
    
    divTipo.innerHTML =
        "Lado 1: " + lado1 + "<br>" + "Lado 2: " + lado2 + "<br>" + "Lado 3: " + lado3 + "<br>" + "Tipo do triângulo: " + tipo
})