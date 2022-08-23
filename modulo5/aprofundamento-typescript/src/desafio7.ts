// Não é segredo para ninguém que as lojas tendem a lucrar bastante próximo ao período natalino. O faturamento delas é o 
// principal indicativo disto. Normalmente, em documentos contáveis, representa-se um valor negativo com a cor vermelha; e um valor 
// positivo com a cor preta. Esta é a razão pela qual a sexta-feira depois da Ação de Graças é chamada de **Black Friday**, indicando que as 
// empresas tendem a ter um faturamento muito alto. Neste exercício, você vai implementar uma funcionalidade importante de uma loja de roupas o 
// valor final do produto durante a black friday. Para isto, ela classifica as roupas em: de verão, de inverno, para banho e íntimas. Cada uma tem a 
// sua própria porcentagem de desconto: 5% (verão), 10% (inverno), 4% (banho) e 7% (íntimas). 

// a) Escreva uma função que receba um array de produtos com nome, preço e classificação; e retorne um array com essas informações e um campo mais: "preço com desconto"

enum DESCONTOS {
    VERAO = "Verão/0.05",
    INVERNO = "Inverno/0.1",
    INTIMAS = "Íntimas/0.04",
    BANHO = "Banho/0.07"
}

type Produto = {
    nome: string,
    preco: number,
    classe: DESCONTOS,
    precoDesconto?: number
}

const produtos: Produto[] = [
    { nome: "Saia", preco: 100.00, classe: DESCONTOS.VERAO},
    { nome: "Carça", preco: 200.00, classe: DESCONTOS.INVERNO},
    { nome: "Camisa", preco: 150.00, classe: DESCONTOS.VERAO},
    { nome: "Toalha", preco: 50.00, classe: DESCONTOS.BANHO},
]

function retornaDesconto(array: Produto[]) {
    const novaCategoria = array.map((produto) => { return {...produto, classe: produto.classe.split("/")}})
    const descontos = novaCategoria.map((produto) => { return {...produto, precoDesconto: produto.preco - (produto.preco * Number(produto.classe[1])), classe: produto.classe[0] }})

    return descontos
}


console.table(retornaDesconto(produtos));
