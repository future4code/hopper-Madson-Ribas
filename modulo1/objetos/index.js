//Exercícios de interpretação de código
// 1
// a. O que vai ser impresso no console?
//console.log(filme.elenco[0]) R. Matheus Nachtergaele
//console.log(filme.elenco[filme.elenco.length - 1]) R. 3
//console.log(filme.transmissoesHoje[2]) R. canal: "Canal Brasil", horario: "19h"

// 2
// a. O que vai ser impresso no console?
//console.log(cachorro) R.idade: 3, nome: "Juca", raca: "SRD"
//console.log(gato) R.idade: 3, nome: "Juba", raca: "SRD"
//console.log(tartaruga) R.idade: 3, nome: "Jubo", raca: "SRD"
// b. O que faz a sintaxe dos três pontos antes do nome de um objeto?
// R. Copia um objeto, depois de feita a cópia podemos alterar ou adicionar informaçãoes ou propridades desse objeto.

// 3.
// a.O que vai ser impresso no console?
//console.log(minhaFuncao(pessoa, "backender")) R. false
//console.log(minhaFuncao(pessoa, "altura")) R. undefined
// b. Retornou undefined pois não atribuimos nehum valor para a propriedade "altura".

// Exercícios de escrita de código
// 1.
// a.
const serhumano = {
    nome: "Madson",
    apelidos: ["Madilson", "Madson Paulo", "Lindo"]
}

function imprimeMensagem(pessoa) {
    return console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);
}

// b.
const outroSerHumano = {
    ...serhumano,
    apelidos: ["MadMax", "Madman", "Meco"]
}

imprimeMensagem(outroSerHumano)

// 2.
// a.
const pessoa1 = {
    nome: "Rosa Angela",
    idade: 45,
    profissao: "Assidtende de Atendimento Médico"
}

const pessoa2 = {
    nome: "Mayson",
    idade: 25,
    profissao: "Autônomo"
}

// b.
function retornaArray(pessoa) {
    const array = [
        pessoa.nome,
        pessoa.nome.length,
        pessoa.idade,
        pessoa.profissao,
        pessoa.profissao.length

    ]
    return array
}

// 3.
// a.
let carrinho = []

const banana = {
    nome: "banana",
    disponivel: true
}

const laranja = {
    nome: "laranja",
    disponivel: true
}

const mamao = {
    nome: "mamão",
    disponivel: true
}

function colocaCarrinho(fruta) {
    carrinho.push(fruta)
}

colocaCarrinho(banana)
colocaCarrinho(laranja)
colocaCarrinho(mamao)


console.log(carrinho);

// Desafios

// 1.

function imprimeNoConsole() {

    const usuario = {
        nome: prompt("Qual é o seu nome?"),
        idade: prompt("Qual é a sua idade?"),
        profissao: prompt("Qual é a sua profissão?")
    }
    console.log(usuario)
}

imprimeNoConsole()

// 2.

let branquelas = {
    nome: "As Branquelas",
    ano: 2004
}

let esposa = {
    nome: "Esposa de Mentirinha",
    ano: 2011
}

function recebeFilmes(filme1, filme2) {
    const pergunta1 = filme1.ano < filme2.ano
    const pergunta2 = filme1.ano === filme2.ano
    console.log("O primeiro filme foi lançado antes do segundo?", pergunta1)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", pergunta2)
}

recebeFilmes(branquelas, esposa)

// 3.

function auxiliar(fruta) {
    return fruta.disponivel = !fruta.disponivel
}