// Exercício 1

let nome:string = process.argv[2]
let data:string = process.argv[3]

let arrayData: Array<string> =  data.split("/")

const meses: Array<string> = ["Janeiro", "Fefereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

let dia: number = Number(arrayData[0]) 
let mes: string = meses[Number(arrayData[1]) - 1]
let ano: number = Number(arrayData[2])

console.log(`Olá, me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`);