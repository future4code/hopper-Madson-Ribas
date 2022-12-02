// export const func = (
//     source: string,
//     comparison: string
//   ): boolean => {
//     if (
//       comparison.length > source.length + 1 ||
//       comparison.length < source.length - 1
//     ) {
//       return false;
//     }
//     let commonCharQuantity = 0;
  
//     for (const char of comparison) {
//       if (source !== comparison) {
//         commonCharQuantity++;
//       }
//     }
//     return (
//       commonCharQuantity <= source.length + 1 &&
//       commonCharQuantity >= source.length - 1
//     );
//   };

  // Para cada char de comparison fazemos uma iteração, sendo assim, dependemos do tamanho n de comparison, a complexidade é O(n).