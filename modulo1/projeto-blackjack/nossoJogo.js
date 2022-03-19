let mensagem = "Boas vindas ao jogo de Blackjack!"
console.log(mensagem)

let inicio = confirm("Quer iniciar uma nova rodada?")

let usuario = []
let computador = []
let somausu
let somacomp

if (inicio) {
    adicionaCartas(usuario);
    adicionaCartas(computador);
    cartasUsuario(usuario)
    cartasComputador(computador)
} else {
    console.log("O jogo acabou")
}

if (somausu > somacomp) {
    console.log("O Usuário ganhou!");
} else if (somacomp > somausu) {
    console.log("O Computador ganhou!");
} else if (somausu === somacomp) {
    console.log("Empate!");
}



function adicionaCartas(array) {
    const carta1 = comprarCarta();
    const carta2 = comprarCarta();
    array.push(carta1, carta2)
}

function cartasUsuario(array) {
    const cartas = array.map((cartas) => { return cartas.texto })
    somausu = array
        .map((valor) => { return valor.valor })
        .reduce((prev, curr) => prev + curr, 0)
    return somausu, console.log(`Usuário - cartas: ${cartas} - pontuação ${somausu}`)
}

function cartasComputador(array) {
    const cartas = array.map((cartas) => { return cartas.texto })
    somacomp = array
        .map((valor) => { return valor.valor })
        .reduce((prev, curr) => prev + curr, 0)
    return somacomp, console.log(`Computador - cartas: ${cartas} - pontuação ${somacomp}`)
}