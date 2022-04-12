class Graph {
    constructor(){
        this.numberOfNodes=0;
        this.adjacentList ={
        }
    }
    addVertex(value){
        if(!this.adjacentList[value]){
            this.adjacentList[value]=[];
            this.numberOfNodes++;
            console.log(this);
            return this
        } else {
            return console.log('node already exists');
        }
    }
    addEdge(edge1,edge2){
        if (!this.adjacentlist[edge1]|| !this.adjacentList[edge2] ){
            return console.log('edge doesn\'t exist');
        } else {
            this.adjacentList[edge1].push(edge2);
            this.adjacentList[edge2].push(edge1);
            console.log(this);
            return this;
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(1);
myGraph.addVertex(0);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge("3","1");
myGraph.addEdge("3","4");
myGraph.addEdge("1","2");
myGraph.addEdge(1,0);
myGraph.addEdge(0,2);
myGraph.addEdge(2,4);
myGraph.addEdge(4,5);
myGraph.addEdge(5,6);






