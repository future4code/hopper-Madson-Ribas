// Exercício 2
    
// Observe a função a seguir, escrita em JavaScript:
    
function obterEstatisticas(numeros: number[]) : { maior: number, menor: number, media: number } {
    
    const numerosOrdenados: number[] = numeros.sort((a, b) => a - b)

    let soma: number = 0 
    
    for (let num of numeros) {
        soma += num 
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    
    return estatisticas
}
    
// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// R. A função recebe um array de números e retorna um objeto com algumas informaçãoes do array como, o maior número, o menor e a média da soma dos números 
    
// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
// R. numerosOrdenados é um array numérico e soma é um number 
    
// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. 
// Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type Amostras = {
    numeros: number[],
    obterEstatisticas: Function 
}

const amostraDeIdades: Amostras = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas(numeros: number){ return numeros}
}

