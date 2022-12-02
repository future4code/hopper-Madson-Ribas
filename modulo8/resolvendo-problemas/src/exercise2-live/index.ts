interface Competitor {
  name: string;
  federation: string;
  sport: string;
  numberOfMedals: number;
}

const competitors: Competitor[] = [
  {
    name: "Usain Bolt",
    federation: "Jamaica",
    sport: "Atletismo",
    numberOfMedals: 54,
  },
  {
    name: "Michael Phelps",
    federation: "EUA",
    sport: "Natação",
    numberOfMedals: 71,
  },
  {
    name: "Rebeca Andrade",
    federation: "Brasil",
    sport: "Ginástica",
    numberOfMedals: 33,
  },
  {
    name: "Alison Santos",
    federation: "Brasil",
    sport: "Atletismo",
    numberOfMedals: 19,
  },
];

// ideia inicial 
// criar um placar como vazio
// loop nos competidores e verificar se já existe o pais no placar
// caso exista, eu somo as medalhas 
// se não existir, eu adiciono o pais e as medalhas no placar 
// retorno o placar 


// Solução com array de objetos

type MedalBoard = {
    federation: string,
    numberOfMedal: number
 }


const calculateMedalBoardWithArray = (competitors:Competitor[]): MedalBoard[] => {
    const result: MedalBoard[] = []

    for (let competitor of competitors){
        const medalBoard =result.find(mb=> mb.federation === competitor.federation)
        if(medalBoard) {
          medalBoard.numberOfMedal += competitor.numberOfMedals
        } else {
          const newMedalBoard: MedalBoard = {
            federation: competitor.federation,
            numberOfMedal: competitor.numberOfMedals
          }
          result.push(newMedalBoard)
        }
    }  
    return result
}

console.table(calculateMedalBoardWithArray(competitors))

// solução com hashTable

type HashTable = {
    [key:string]: number
    // Brasil: 52
}

const calculateMedalBoardWithHashTable = (competitors:Competitor[]): HashTable => { 
    const medalBoard: HashTable = {}

    for(let competitor of competitors) {                
        if(medalBoard[competitor.federation]) {
          medalBoard[competitor.federation] += competitor.numberOfMedals
        } else {
          medalBoard[competitor.federation] = competitor.numberOfMedals
        }
    }
    return medalBoard
}

console.table(calculateMedalBoardWithHashTable(competitors))

