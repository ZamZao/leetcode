class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

const firstNode = new Node(10);

class LinkedList {
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head;
        this.length=1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next=this.head
        this.head=newNode
        this.length++;
    }
    deleteFirstElement(){
        this.head.value=this.head.next.value;
        this.head.next=this.head.next.next;
        this.length--;
    }
    deleteLastElement(){
        let currentNode = this.head;
        while(currentNode.next.next !== null){
            currentNode=currentNode.next;
        }
        this.tail=currentNode;
        currentNode.next=null;
        this.length--;
    }
    insertAtIndex(){

    }
    deleteAtIndex(){

    }
    printList(){
        let currentNode = this.head;
        let list='';
        while(currentNode!==null){
            list+=currentNode.value+', '
            currentNode=currentNode.next;
        }
      return console.log(list);
    }
    reverseList(){

    }

}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(2);
console.log('append',myLinkedList);
myLinkedList.prepend(12);
console.log('prepend',myLinkedList);
myLinkedList.printList();
myLinkedList.deleteFirstElement();
console.log("deleted first element",myLinkedList.printList());
myLinkedList.printList();
console.log('deleted first element',myLinkedList);
myLinkedList.deleteLastElement();
console.log('deleted last element',myLinkedList);
myLinkedList.printList();





















































// class NewNode {
//     constructor (value, next = null){
//         this.value=value;
//         this.next=next
//     }
// }

// class LinkedList {
//     constructor(value){
//         this.head = {
//             value: value,
//             next:null
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }
//     // append an element

//     // prepend element
    
//     // delete first element
    
//     // delete last element
    
//     // append at n index
    
//     // print list
    
// }

// const myLinkedList = new LinkedList(10);
// console.log('First',myLinkedList.printList());
// myLinkedList.append(5);
// console.log('Second',myLinkedList.printList());
// myLinkedList.append(2);
// console.log('third',myLinkedList.printList());
// myLinkedList.prepend(2);
// console.log('fourth',myLinkedList.printList());
// myLinkedList.deleteFirstElement();
// console.log('fifth',myLinkedList.printList());
// myLinkedList.deleteLastElement();
// console.log('sixth',myLinkedList.printList());
// myLinkedList.appendatNIndex(7,1);
// console.log('seventh',myLinkedList.printList());
// console.log(myLinkedList.traverseToIndex(0).value);
// console.log(myLinkedList.traverseToIndex(1).value);
// console.log(myLinkedList.traverseToIndex(2).value);
