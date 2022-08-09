//Como fazemos para acessar os parâmetros passados na linha de comando para o Node? 
//Usando o process.argv[].

const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = idade + 7

// console.log(`Olá ${nome}, sua idade é ${idade} anos.`);

console.log(`Olá ${nome}, sua idade é ${idade} anos, e daqui a sete anos você terá ${novaIdade} anos`);


