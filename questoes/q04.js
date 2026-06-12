const formNotas = document.querySelector("#boletim")
const divSituacao = document.querySelector("#div-resultado")

formNotas.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    const dadosForm = new FormData(formNotas)

    const nome = dadosForm.get('nome')
    const n1 = dadosForm.get('n1')
    const n2 = dadosForm.get('n2')
    const n3 = dadosForm.get('n3')

var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3 
var situacao = ""
if(media >= 7){
    situacao = "Aprovado"
}else if(media >= 5 && media < 7){
    situacao = "Recuperação"
}else{
    situacao = "Reprovado"
}
divSituacao.innerHTML =
 "Aluno: " + nome + "<br>" + "Média: " + media.toFixed(2) + "<br>" + "Situação: " + situacao
})