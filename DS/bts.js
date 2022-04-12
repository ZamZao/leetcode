class Node {
    construction(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}

class BTS {
    constructor(){
        this.root=null;
    }
    insert(value){
    const newNode = new Node(value);
    if (this.root===null) {
        this.root= newNode;
        return this;
    } else {
        let currentNode = this.root;
        while(true){
            if (currentNode.value - value >0){
                if (currentNode.right===null){
                    currentNode.right=value
                    return this
                } else {
                    currentNode = CurrentNode.right;
                }
            } else {
                if (currentNode.left===null){
                    currentNode.left=value
                    return this
                } else {
                    currentNode = CurrentNode.right;
                }
            }
        }
    }

    }
    lookup(value){
        

    }
}

const tree = new BTS();
console.log(tree);
tree.insert(9);
console.log(tree);