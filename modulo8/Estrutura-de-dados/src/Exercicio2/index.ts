// Faça a implementação de uma Pilha em *Typescript* e utilizando uma Lista Ligada como estrutura de base (em aula, usamos um Array). Implemente os métodos:

import { LinkedList, NodeItem } from "../LinkedList/ListNode"

// `isEmpty`: que indica se ela está vazia

// `push`: que adiciona um elemento à pilha

// `pop`: que retira um elemento da pilha

// `print`: que imprima todos os elementos da pilha



class Pilha {
    constructor(
        public items: LinkedList = new LinkedList,
        public length: number = 0
    ) {}

    isEmpty() {
        if (this.items.head === null) {
            console.log("Pilha vazia")         
        } 
        return console.log("Pilha contem itens")        
    }
  
    push(value: any) {
        this.items.add(value)
        this.length ++
    }

    pop() {
        if(this.items.head === null) {
            console.log("Pilha vazia");                
        } else {
            let previousNode: NodeItem | null = null
            let currentNode: NodeItem | null = this.items.head

            while(currentNode!.next){
                previousNode = currentNode
                currentNode = currentNode!.next 
            }

            previousNode!.next = null

            return currentNode
        }
    }

    print() {  
        if (this.items.head !== null) {
            this.items.print();
        }
    }
}


const pilha = new Pilha

pilha.push(1)
pilha.push(2)

pilha.print()
