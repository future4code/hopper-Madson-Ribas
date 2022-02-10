/* Exercício de interpretação 1
console.log("a. ", resultado) = false 
console.log("b. ", resultado) = false
console.log("c. ", resultado) = true
console.log("a. ", typeof resultado) = boolean
*/

/* Exercício de interpretação 2
As duas variáveis criadas nos prompts primeiroNumero e segundoNumero
são do tipo string, dessa maneira o código não vai coneguir 
fazer a soma que ele deseja, vai apenas unir as duas variáveis
no console. 
*/

/* Exercício de interpretação 3
Uma maneira de corrigir o problema é transformarmos em 
number as dúas vaiáveis dessa forma:

de:
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

para:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
*/

// Exercício de escrita 1

let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo ou amiga?"))

const diferenca = idadeUsuario>idadeAmigo
console.log("Sua idade é maior que a do seu amigo ou amiga?", diferenca)
console.log("diferença de idade:", idadeUsuario-idadeAmigo)

// Exercício de escrita 2

let numeroPar = Number(prompt("Insira um númer par:"))
let restoDivisao = numeroPar%2
console.log("Resto da divisão:", restoDivisao)

/* Exercício de escrita 2 c. Toda vez que inserimos um número par o resultado 
de: 
let restoDivisao = numeroPar%2
console.log("Resto da divisão:", restoDivisao)
é igua a zero.
*/
/* Exercício de escrita 2 d. Caso o usuário insira um número ímpar o reultado
no console será diferente de zero, ele sempre retornará um número ímpar.
*/

// Exercício de escrita 3

let idadeEmAnos = Number(prompt("Qual a sua idade?"))
const idadeMeses = idadeEmAnos*12
const idadeDias = idadeEmAnos*365
const idadeHoras = idadeDias*24

console.log("Sua idade em meses:", idadeMeses, "meses")
console.log("Sua idade em dias:", idadeDias, "dias")
console.log("Sua idade em horas:", idadeHoras, "horas")

// Exercício de escrita 4

let num1 = Number(prompt("Primeiro número:"))
let num2 = Number(prompt("Segundo número:"))

const a = num1>num2
const b = num1===num2
const c = num1%num2 
const d = num2%num1 
const cc = c===0
const dd = d===0

console.log("O primeiro numero é maior que segundo?", a)
console.log("O primeiro numero é igual ao segundo?", b)
console.log("O primeiro numero é divisível pelo segundo?", cc)
console.log("O segundo numero é divisível pelo primeiro?", dd)