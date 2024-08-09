import LinkedList from "./LinkedList.mjs";

// Helper function to extract node data
function nodeToString(node) {
    if (!node) return "null";
    return JSON.stringify({ data: node.data });
}


const list = new LinkedList();
// list.append(100);
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
// console.log(`Head node: ${nodeToString(list.head)}`);
// console.log(`Full list: ${JSON.stringify(list)}`);

console.log(list.toString());