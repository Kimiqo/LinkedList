import LinkedList from "./LinkedList.mjs";

// Helper function to extract node data
function nodeToString(node) {
    if (!node) return "null";
    return JSON.stringify({ data: node.data });
}


const list = new LinkedList();
// list.append(100);
list.append(200);
list.append(300);
list.append(400);
console.log(`Head node: ${nodeToString(list.head)}`);
console.log(`Before prepend .. Full list: ${JSON.stringify(list)}`);
list.prepend(100);
console.log(`Head node: ${nodeToString(list.head)}`);
list.prepend(50);
console.log(`Head node: ${nodeToString(list.head)}`);
console.log(`After prepend .. Full list: ${JSON.stringify(list)}`);


// console.log(`Full list: ${JSON.stringify(list)}`); //full linked list

// console.log(`Number of nodes: ${list.size}`); //number of nodes

// console.log(`Head node: ${nodeToString(list.head)}`); //head node

// console.log(`Tail: ${nodeToString(list.tail)}`); //tail node

// console.log(`Node at specified index : ${nodeToString(list.at(2))}`);  //at(index) example: 2

// console.log(`Removed node: ${nodeToString(list.pop())}`); //returns removed node
// console.log(`Full list after pop: ${JSON.stringify(list)}`);

// console.log(`Contains value: ${list.contains(300)}`); //check if contains(value)