class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack {
    constructor(){
        this.top=null;
        this.bottom=null;
        this.length=0;
    }
    peek(){
        console.log(this.top);
    return this.top
    }
    push(value){
    const newNode = new Node(value);
    if (this.length===0){
        this.top= newNode;
        this.bottom= newNode;
    } else {
        newNode.next=this.top;
        this.top=newNode;
    }
    this.length++;
    return this;
    }
    pop(){
    if(this.length===0) {
        return console.log('error: list is already empty')
    }
    if (this.length===1){
        this.top=null;
        this.bottom=null;
        this.length=0;
    } else if (this.length===2){
        this.top=this.bottom;
        this.length=1;
    } else {
        this.top.value=this.top.next.value;
        this.top.next=this.top.next.next;
    }
}

    isEmpty(){
        if(this.length===0){
            console.log('Stack is empty')
        }

    }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(5);
// myStack.push(5);
myStack.peek();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
myStack.pop();
