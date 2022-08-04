const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

let operacao = process.argv[2] 
let resposta = ""

switch (operacao) {
    case "add":
        resposta = num1 + num2
        break;
    case "sub":
        resposta = num1 - num2
        break;
    case "mult":
        resposta = num1 * num2
        break;
    case "div":
        resposta = num1 / num2
        break;        

    default:
        break;
}


console.log(`Resposta: ${resposta}`);