type Cliente = {
	cliente: string,
	saldoTotal: number,
	debitos: number[]
}

let clientes: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function retornaOsPobre(array: Cliente[]) : object[] {  

    return array.map((cliente) => {
        return {...cliente, 
                debitos: cliente.debitos.reduce((previus: number, currant: number) => previus - currant, cliente.saldoTotal)}})
            .filter(cliente => cliente.debitos < 0)
}

console.log(retornaOsPobre(clientes));
