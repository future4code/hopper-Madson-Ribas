type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript? 
// R. No terminal chamamos o código tsc mais o nome do arquivo para transpilar o arquivo .ts para .js.

// c) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.
// R. Sim, automaticamente a aplicação iria mandar o arquivo transpilado, exercicio4.js, para a basta build, ou a "outDir" definida no tsconfig.json 

// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
// R. Sim, no arquivo tsconfig.json, podemos configurar uma pasta raiz para a nossa aplicação, dela cada vez que usarmos a função tsc no terminal, todos 
// os arquivos .ts dela são transpilados para a pasta definida na propriedade "outDir" do tsconfig.json.