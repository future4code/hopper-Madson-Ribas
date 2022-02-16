// Exercicio de interprertação 1
// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
// a. undefined

// b. null

// c. 11

// d. 3

// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// f. 9

// Exercicios de interprertação 2

//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// R. SUBI NUM ÔNIBUS EM MIRROCOS 27

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Exercícios de escrita de código
 
// Exercício 1

let nomeDoUsuario = prompt("Como você se chama?")
let emailDoUsuario = prompt("E qual é o seu e-mail")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo(a) ${nomeDoUsuario}!`)

// Exercício 2
// A.
let comidaDeGordo = ["Pizza","Lasanha","Strogonoff de Frango","Churrasco","Hamburguer"]

// B.
console.log(comidaDeGordo)
console.log("Estas são as minhas comidas favoritas")
comidaDeGordo.forEach(Element => console.log(Element))

// C.

let novaComida = prompt("Qual é a sua comida favorita?")
comidaDeGordo[1] = novaComida
console.log("Estas são as minhas comidas favoritas")
comidaDeGordo.forEach(Element => console.log(Element))

// Exercício 3
// A.

let listaDeTarefas

// B.
confirm("Cite três tarefas que você precise realizar hoje")

let taref1 = prompt("Tarefa 1")

let taref2 = prompt("Tarefa 2")

let taref3 = prompt("Tarefa 3")

listaDeTarefas = [taref1, taref2, taref3]

// C.

console.log(listaDeTarefas)

// D.

let tarefaOK = prompt("Qual tarefa você já realizou? 1ª, 2ª ou 3ª.")

// E.

listaDeTarefas.splice(tarefaOK-1,1)

// F.

console.log(listaDeTarefas)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Desafios
// 1.

let frase = prompt("Digite uma frase") 
let fraseArray = frase.split(" ")
console.log(fraseArray)


// 2.

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let fruta = "Abacaxi"

console.log(frutas.indexOf(fruta), frutas.length)