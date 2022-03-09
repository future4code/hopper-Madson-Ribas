// Exercícios de interpretação de código

// 1 O código faz com que para cada incrementação da variável "valor" ele soma o valor de i na variavel "valor" até que o valor de i seja maior que 5

// 2. a. Será impreso no console 19, 21, 23, 25, 27, 30.
// b. Não podemos acessar o índice do array com o for...of... para conceguirmos ter acesso a essa informação precisamos utilizar o for.

// 3 Para cada linha que inserirmos no valor do prompt, no nosso caso 4 o código irá inserir um asterísco em cada linha do console. O resultado seria esse:
// * 
// **
// *** 
// ****

// Exercícios de escrita de código

// 1 

/*let pets = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nomePets = []
if (pets > 0) {
    for (let index = 0; index < pets; index++) {
        const nome = prompt("Quais são os nomes deles")
        nomePets.push(nome)
    }
} else {
    console.log("Que pena! Você pode adotar um pet!");
}

console.log(nomePets);
*/
// 2 
// a. 
function imprimeValores(array) {
    for (const number of array) {
        console.log(number);
    }
}

// b.
function divide10(array) {
    for (const number of array) {
        console.log(number / 10);
    }
}

// c.
function imprimePares(array) {
    let novaArray = []
    for (let i = 0; i < array.length; i++) {
        let numero = array[i];
        if (numero % 2 === 0) {
            novaArray.push(numero)
        }
    }

    console.log(novaArray);
}

// d.
function imprimeIndice(array) {
    let arrayString = []
    for (let i = 0; i < array.length; i++) {
        let numero = array[i];
        arrayString.push(
            `O elemento do índex ${i} é: ${numero}`
        )
    }
    console.log(arrayString);
}

// e.
function maioreMenor(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++) {
        let numero = array[i];
        if (numero > maior) {
            maior = numero
        }

    }
    let menor = maior
    for (let i = 0; i < array.length; i++) {
        let numero = array[i];
        if (numero < menor) {
            menor = numero
        }
    }
    console.log(
        `O maior número é ${maior} e o menor número é ${menor}`
    );
}