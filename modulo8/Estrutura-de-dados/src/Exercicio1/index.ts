// Faça a implementação de uma Lista Ligada em Typescript. 
// Implemente o método que adiciona um elemento ao final da lista e 
// um método que imprima todos elementos presentes nela.

class NodeItem {
    constructor(
        public value: any,
        public next: NodeItem | null = null
    ) {}
}

export class LinkedList {
    constructor(
        public head: NodeItem | null = null
    ){}
   
        add(value: any) {
            const nodeToAdd = new NodeItem(value)
            if(!this.head){
                this.head = nodeToAdd
            } else {
                let currentNode = this.head
                while(currentNode.next) {
                    currentNode = currentNode.next
                }
                currentNode.next = nodeToAdd
            }
        }

        print() {  
            let currentNode = this.head
            while(currentNode!.next !== null) {
                console.log(currentNode?.value);
                currentNode = currentNode!.next
            }
        }
}



const linkedList = new LinkedList 
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);

linkedList.print()
