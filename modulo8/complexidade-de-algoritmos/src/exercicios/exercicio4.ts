// function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
//     for (let i = 0; i < listOfNumbers.length; i++) {
//       if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
//         return true;
//       }
//     }
//     return false;
//   }

// Se assumirmos que o .indexOf tem uma complexidade O(n), a função se trona de complexidade quadrática pois a cada iteração de listOfNumber ela consulta o index de listOfNumbers[i], 
// portando o grau de complaxidade é O(n²).