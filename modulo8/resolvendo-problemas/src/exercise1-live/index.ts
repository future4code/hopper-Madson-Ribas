// ideia inicial
//
// função que vai receber uma string
// função para  normalizar a string
// verificar se é um palíndromo {
//
//    trasnformar em um array
//    inverter o array
//    juntar a string novamente
// }
// comparar as duas palavras

// esboço psedo-código

// funçaoAjustaString => {
// toLowerCase
// retirar acentos
// reitar caracteres especiais
//}

// funçãoChecaPalindromo(string): boolean => {
// funçãoAjustaString(string)
// split("")
// reverse()
// join("")
// return (comparação das duas string)
//}

// Resolvendo o problema

const formatText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[óöõô]/gi, "o")
    .replace(/[éèê]/gi, "e")
    .replace(/[íìïî]/gi, "i")
    .replace(/[áãàâ]/gi, "a")
    .replace(/[ùûúü]/gi, "u")
    .replace(/[\,:.´`" "]/gi, "");
};

const checkPalyndrome = (text: string): boolean => {
  const formatedText = formatText(text);
  const finalString = formatedText.split("").reverse().join("");
  return formatedText === finalString;
};
console.log(
  "0",
  "expected true",
  checkPalyndrome("Aí, Lima falou: ´Olá, família´")
);

//   // testes

console.log("1", "expected true", checkPalyndrome("ana"));
console.log("2", "expected false", checkPalyndrome("chapéu"));
console.log("3", "expected true", checkPalyndrome("subi no ônibus"));
console.log("4", "expected true", checkPalyndrome("ôóôéeóôô"));
console.log(
  "5",
  "expected true",
  checkPalyndrome("A dama admirou o rim da amada")
);
