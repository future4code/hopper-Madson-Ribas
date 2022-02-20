// Exercícios de interpretação de código

// 1.
// A. 10 e 50
/* B. No console não apareceria nada, pois a função apenas retorna o valor da operação sem imprimir no console, 
para ser impresso sem digitar o comando console.log() poderíamos alterar a lógica da função de:

function minhaFuncao(variavel) {
	return variavel * 5
}
para:

function minhaFuncao(variavel) {
	console.log(variavel * 5)
}

Assim não precisaríamos usar o comando toda vez que invocarmos a função*/

// 2.
/* A. A função busca a palavra "cenoura" dentro de uma variavel inserida pelo usuário em um prompt. Ela pode ser usada como 
uma função para verificação de resposta em um formulário, por exemplo, já que ela verifica um texto expecífico dentro de uma string.*/

/* B. 
1. Entrada: "Eu gosto de cenoura", saída: true
2. Entrada: "CENOURA é com pra vista", saída: true
3. Entrada: "Cenouras crescem na terra", saída: true
*/

// Exercícios de escrita de código
// 1.
// A.
function imprimeInformacoes() {
   console.log("Eu sou Madson, tenho 26 anos, moro no Paraná e trabalho na Indústia de Caminhões") 
}
imprimeInformacoes()

// B.
function recebeInformacoes(nome, idade, cidade, profissao) {
    console.log(`Eu nou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao} `)   
}
let nome = prompt("Como você se chama?")
let idade = Number(prompt("Qual a sua idade?"))
let cidade = prompt("Qual o nome da sua cidade?")
let profissao = prompt("Qual é a sua profissão?")

recebeInformacoes(nome, idade, cidade, profissao)


// 2.
// A.
function somaDuasEntradas(a, b) {
    let soma = a + b
    return soma
}

console.log(somaDuasEntradas(5, 10))

// B.
function booleanoDuasEntradas(a, b) {
    let booleano = a >= b
    return booleano
}

// C.
function booleanoPar(a) {
    let par = a % 2
    return par === 0   
}

// D.
function recebeString(mensagem) {
    let tamanho = mensagem.length
    let frase = mensagem.toUpperCase()
    console.log(tamanho, frase)
}
recebeString("Hoje foi um dia exelente no trabalho!")

// 3.
function soma (a, b) {
    let soma = a + b
    return soma
}

function diferenca (a, b) {
    let diferenca = a - b
    return diferenca
}

function multiplicacao (a, b) {
    let multiplicacao = a * b
    return multiplicacao
}

function divisao (a, b) {
    let divisao = a / b
    return divisao
}

confirm("Insira dois números")
let a = Number(prompt("Primeiro número:"))
let b = Number(prompt("Segundo número:"))

console.log(`Números inseridos: ${a} e ${b}`)
console.log(`Soma: ${soma(a, b)}`)
console.log(`Diferença: ${diferenca(a, b)}`)
console.log(`Multiplicação: ${multiplicacao(a, b)}`)
console.log(`Divisão: ${divisao(a, b)}`)

// Desafios
// 1.
// A.
let imprimeParametro = (parametro) =>{
    console.log(parametro)
}

// B.
let recebeValores = (a, b) => {
    let soma = (a + b)
    imprimeParametro(soma)
}

recebeValores(5, 6)

// 2. 
function pitagoras(cateto1, cateto2) {
    let hipotenusa = Math.sqrt((cateto1*cateto1)+(cateto2*cateto2))
    return hipotenusa
}

let imprimehipotenusa = console.log(pitagoras(5, 5))
