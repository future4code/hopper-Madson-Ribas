const somaInteirosIterativa = (n: number): number => {
    var soma = 0
    for (var i = 0 ; i <= n ; i++) {
        soma += i;
    }
    return soma;
};

console.log(somaInteirosIterativa(7));
