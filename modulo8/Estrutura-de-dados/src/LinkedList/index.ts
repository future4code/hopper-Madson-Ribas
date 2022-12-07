import { LinkedList, NodeItem } from "./ListNode";

const node = new NodeItem(1)
const linkedList = new LinkedList(node)


linkedList.add(2)
linkedList.add(3)
linkedList.add(4)


console.log(linkedList.find(1))


