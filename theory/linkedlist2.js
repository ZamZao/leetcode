class NewNode {
    constructor (value, next = null){
        this.value=value;
        this.next=next
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next:null
        };
        this.tail = this.head;
        this.length = 1;
    }
    // append an element
    append (value){
        const newNode = new NewNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    // prepend element
    prepend(value){
        const newNode = new NewNode(value);
        newNode.next=this.head;
        this.head=newNode;
        this.length++;
    }
    // delete first element
    deleteFirstElement(){
        this.head.value=this.head.next.value;
        this.head.next=this.head.next.next;
        this.length--;
    }
    // delete last element
    deleteLastElement(){
        let currentNode= this.head
        while(currentNode !== null){
            if(currentNode.next.next===null){
                currentNode.next=null;
            }
            this.tail= currentNode;
            currentNode = currentNode.next;
        }
        this.length--;
    }
    // append at n index

    // print list
    printList(){
        let currentNode = this.head
        let mylist = '';
        while(currentNode !==null){
            mylist+=currentNode.value+', '
            currentNode = currentNode.next;
        }
        return mylist
    }
}

const myLinkedList = new LinkedList(10);
console.log('First',myLinkedList.printList());
myLinkedList.append(5);
console.log('Second',myLinkedList.printList());
myLinkedList.append(2);
console.log('third',myLinkedList.printList());
myLinkedList.prepend(2);
console.log('fourth',myLinkedList.printList());
myLinkedList.deleteFirstElement();
console.log('fifth',myLinkedList.printList());
myLinkedList.deleteLastElement();
console.log('sixth',myLinkedList.printList());



