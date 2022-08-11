enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function retornaObjFilme(
    nome:string, 
    ano: number, 
    genero: string, 
    pontuacao?: number) : object {
        let objDeFilme: object = {}

        if (pontuacao !== null){
        objDeFilme = {
            nome: nome,
            anoLancamento: ano,
            genero: genero,
            pontuacao: pontuacao
        }
        } if (pontuacao === undefined) {
        objDeFilme = {
            nome: nome,
            anoLancamento: ano,
            genero: genero,
        }
        }
        return objDeFilme
}

console.log(retornaObjFilme( "Mama", 2011, GENERO.TERROR, 100));

    