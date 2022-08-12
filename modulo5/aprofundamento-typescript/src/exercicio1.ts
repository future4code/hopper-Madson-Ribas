// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece? 
// R. Ao atribuir um número a uma string aparece uma mensagem de erro e o typescript brigou comigo :(

let minhaString: string = "[Frase de conhecimento profundo sobre os segredos do Universo e tudo o que há nele]" 
minhaString = "32" /* Não deixou ಠ╭╮ಠ */ 

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
//
//                 Assim (▀̿Ĺ̯▀̿ ̿)
//                    ||
//                    ||
//                   \  /
//                    \/
let meuNumero: number | string = 32 

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

let obejeto: {nome: string, idade: number, corFavorita: string} = {nome: "Steferson", idade: 10, corFavorita: "Rosa"}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// type Pessoa = { nome: string, idade: number, corFavorita: string }

// let persona1: Pessoa = { nome: "Cassilda", idade: 12, corFavorita: "Laranja" }
// let persona2: Pessoa = { nome: "Torquatro", idade: 3.5, corFavorita: "Marrom" }
// let persona3: Pessoa = { nome: "Raimunda", idade: 97.8, corFavorita: "Fúxia" }


// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

enum CORES {
    Vermelho = "Vermelho",
    Laranja = "Laranja",
    Amarelo = "Amarelo",
    Verde = "Verde",
    Azul = "Azul",
    AzulMarinho = "Azul-Marinho",
    Violeta = "Violeta"
}

type Pessoa = { nome: string, idade: number, corFavorita: CORES }

let persona1: Pessoa = { nome: "Cassilda", idade: 12, corFavorita: CORES.Laranja }
let persona2: Pessoa = { nome: "Torquatro", idade: 3.5, corFavorita: CORES.Violeta }
let persona3: Pessoa = { nome: "Raimunda", idade: 97.8, corFavorita: CORES.Azul }