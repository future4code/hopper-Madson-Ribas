// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt("Qual a altura do retângulo?"))
const largura = Number(prompt("Qual a largura do retângulo?"))

console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Em que ano estamos?"))
const anoNascimento = Number(prompt("Em que ano você nasceu?"))

console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual é a sua idade?")
const email = prompt("Qual é o seu endereço de e-mail?")

console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email+".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual a sua cor favorita?")
const cor2 = prompt("Qual a sua segunda cor favorita?")
const cor3 = prompt("Qual a sua terceira cor favorita?")

console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
return stringLength = string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let tamanho = array.length

return array[tamanho-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let tamanho = array.length
  let primeiro = array[0]
  let ultimo = array[tamanho-1]

  array.splice(tamanho-1,1)
  
  array.push(primeiro)
 
  array.splice(0,1)
 
  array.unshift(ultimo) 

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let str1 = string1.toLowerCase()
  let str2 = string2.toLowerCase()
  
  let igualdade = str1 === str2

return igualdade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const sim = "sim"

  let maiorIdade = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você possui ensino médio completo?")
  let disponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  
  let cmaiorIdade = maiorIdade.toLowerCase() === sim
  let censinoMedio = ensinoMedio.toLowerCase() === sim
  let cdisponivel = disponivel.toLowerCase() === sim 
  
  console.log(cmaiorIdade && censinoMedio && cdisponivel)
  
}