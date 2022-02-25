//Exercícios de interpretação de código
/* 1. a. O codigo recebe uma informação do usuario, um número, transforma
a variavelpara o tipo Number, e testa se o numero inserido pelo o usuário é par.

b. Para os números pares.
c. Para os números ímpares.

2. a. Para informar ao cliente qual o preço das frutas
b. "O preço da fruta Maçã é R$2,25"
c. Retornaria o preço default, 5.

3. a. Está pedindo para o usuário inserir um número e já transformando a entrada para o tipo number.
b. Se inserirmos o número 10 retornará que o número passou no teste, se inserirmos -10 não retornará nenhuma mensagem.
c. Sim, a variavel "mensagem" foi declarada dentro do escopo local e chamada em um console no escopo global. Isso vai gerar uma mensagem de erro dizendo que a mensagem não foi definida.
*/


// Exercícios de escrita de código.

// 1. 

let idade = Number(prompt("Qual a sua idade?"))

function podeDirigir(idade) {
    if (idade >= 18) {
        console.log("Pode dirigir!");
    } else {
        console.log("Não pode dirigir!");
    }
}

podeDirigir(idade)

// 2.
let turno = prompt("Digite em qual turno você estuda M (matutino) ou V (Vespertino) ou N (Noturno).")

function retornaTurno(turno) {
    if (turno === "M") {
        console.log("Bom dia!");
    } else if (turno === "V") {
        console.log("Boa tarde!");
    } else {
        console.log("Boa Noite!");
    }
}
retornaTurno()

// 3.

function turnoSwich(turno) {
    switch (turno) {
        case "M":
            console.log("Bom dia!");
            break;

        case "V":
            console.log("Boa tarde!");
            break;

        case "N":
            console.log("Boa noite!");
            break;

        default:
            "Informação incorreta"
            break;
    }
}

turnoSwich(turno)

// 4. 

let genero = prompt("Qual o gênero de filme vocês irão assistir?")
let preco = Number(prompt("Qual o valor dos ingressos?"))

function imprimeConsole(genero, preco) {
    if (genero === "fantasia" && preco < 15) {
        console.log("Bom filme!");
    } else {
        console.log("Escolha outro filme :(");
    }
}

imprimeConsole(genero, preco)

// Desafio

// 1. a.

let snack = prompt("Qual snack você quer comprar?")

function imprimeConsoleSnack(genero, preco, snack) {
    if (genero === "fantasia" && preco < 15) {
        console.log(`Bom filme!`);
        console.log(`Aproveite seu ${snack}`)
    } else {
        console.log("Escolha outro filme :(");
    }
}

imprimeConsoleSnack(genero, preco, snack)