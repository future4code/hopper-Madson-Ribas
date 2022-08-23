function retornaAnagramas(palavra: string): number {
    const array: Array<string> = [...palavra]
    
    let anagramas: number = array.length
    return anagramas
}


function factorialize(num: number): number {
   
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
      }
  }

  console.log(factorialize(retornaAnagramas(process.argv[2])))
  