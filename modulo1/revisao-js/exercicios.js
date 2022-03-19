// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
        // Desafio.
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(
            function funcaoOrdena(a, b) {
                return a - b
            }
        ) //Desafio.
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter((numero) => {
        return numero % 2 === 0
    })
    return numerosPares
} //Desafio.

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const paresAoQuadrado = array
        .filter((numero) => {
            return numero % 2 === 0
        })
        .map((numero) => {
            return numero * numero
        })
    return paresAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    let maiorDivisivelPorMenor
    let diferenca

    if (num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    diferenca = maiorNumero - menorNumero

    let saida = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }

    return saida
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let i = 0
    let array = []
    while (array.length < n) {
        array.push(i)
        i = i + 2
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let ab = ladoA === ladoB
    let ac = ladoA === ladoC
    let bc = ladoB === ladoC
    if (ab && ac && bc) {
        return `Equilátero`
    } else if (ab || ac || bc) {
        return `Isósceles`
    } else {
        return `Escaleno`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let max
    let min

    function maiorEMenor(array) {
        max = Math.max(...array)
        min = Math.min(...array)
        return max, min
    }

    function ordenaArray(array) {
        return array.sort(
            function funcaoOrdena(a, b) {
                return a - b
            })
    }

    let novaArray = []

    if (array.length > 4) {
        ordenaArray(array)
        array.pop()
        array.splice(0, 1)
        maiorEMenor(array)
        novaArray = [max, min]
    } else if (array.length === 3) {
        ordenaArray(array)
        let imedio = array[1]
        novaArray = [imedio, imedio]
    } else {
        maiorEMenor(array)
        novaArray = [min, max]
    }

    return novaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa,
        nome: 'ANÔNIMO'
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.5)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort(function(objA, objB) {
        a = objA.nome.toLowerCase()
        b = objB.nome.toLowerCase()
        return a.localeCompare(b)
    })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((dataA, dataB) => {
        a = dataA.dataDaConsulta.split("/").reverse().join();
        b = dataB.dataDaConsulta.split("/").reverse().join();
        return a.localeCompare(b)
    })
}