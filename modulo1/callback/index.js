//Exercícios de interpretação de código
// 1. O que vai ser impresso no console?
// Serão impressos os objetos sem nenhum filtro, ja que no código nao ficou específico de qual objeto se trata que o map esta lidand

// 2. O que vai ser impresso no console?
// Serão impressos apenas os nomes dos usuários.

// 3. O que vai ser impresso no console?
// Serão impressos os apelidos dos usuários.

// Exercícios de escrita de código

// 1 
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a. 
const arrayNome = pets.map((item, index, array) => {
    return item.nome
})

// b.
const salsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

// c.
const desconto10 = pets
    .filter((item, index, array) => {
        return item.raca === "Poodle"
    })
    .map((item, index, array) => {
        return "Você ganhou um cupom de desconto de 10% para tosar o/a" + item.nome
    })

// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a.
const arrayItens = produtos.map((item, index, array) => {
    return item.nome
})

// b.
const desconto5 = produtos.map((produto) => {
    const objeto = {
        nome: produto.nome,
        preco: (produto.preco * 0.95).toFixed(2)
    }
    return objeto
})

// c.
const bebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})

// d.
const ype = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})

// e.
const compreYpe = ype
    .map((produto) => {
        return `Compre ${produto.nome} por ${produto.preco}`
    })

// Desafios
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a.
const nomePokes = pokemons.map((item) => {
    return item.nome
}).sort()

// b. 
const tiposPokes = new Set(pokemons.map((item) => {
    return item.tipo
}))