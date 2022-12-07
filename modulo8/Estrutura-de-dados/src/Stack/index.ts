class Stack {
    constructor(
        public items: any[] = [],
        public length: number = 0
    ) {}
  
    push(item: any) {
        this.items[this.length] = item
        this.length++
    }

    pop() {
        if(this.length === 0) {
            console.log("Empty stack")
        } else {
            this.length--
            const removedItem = this.items[this.length]
            this.items.length = this.length 
            return removedItem
        }
    }

    peek() {
        return this.items[this.length-1]
    }
}

const stack = new Stack() 

stack.push(1)
stack.push(20)
stack.push(31)
stack.push(40)
stack.push(5)
stack.pop()

console.log(stack.peek())

