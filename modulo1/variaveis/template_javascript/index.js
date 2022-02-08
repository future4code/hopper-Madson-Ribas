// Exercíco 1

let nome 
let idade 
console.log(typeof nome, idade)

/* Retornou um tipo undefined para as duas variaveis, poque não foi atribuido um valor para as variaveis, 
então o console não soube identificar o tipo da variavel */

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log(typeof nome, typeof idade)

/* Eu notei que as duas variaveis retornaram do tipo string, ja que o prompt só armazena informação do tipo string, se quisessemos 
converter para number precisariamos digitar o código da seguinte forma idade = Number(prompt("Qual é a sua idade?")) */

console.log('Olá', nome, 'você tem', idade, 'anos')

// Exercício 2

let foiAula = prompt("Você foi para a aula hoje?")
let comoDormiu= prompt("Você dormiu bem a noite?")
let jaJantou = prompt("Você já jantou hoje?")

console.log("Você foi para a aula hoje?", foiAula)
console.log("Você dormiu bem a noite?", comoDormiu)
console.log("Você já jantou hoje?", jaJantou)

// Exercício 3

let a = 10
let b = 25
let c 

// Aqui faremos uma lógica para trocar os valores

c = a 
a = b
b = c 

// Depois de trocados, teremos os seguintes resultados

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio

let var1 = Number(prompt("Qual o primeiro número?"))
let var2 = Number(prompt("Qual o segundo número?"))

let op1 = var1+var2
let op2 = var1*var2

console.log("O primeiro número somado ao segundo número resulta em", op1)
console.log("O primeiro número multiplicado segundo número resulta em", op2)
