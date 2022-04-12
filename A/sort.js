
/*** insertion sort */

const InsertionSort = (array) =>{
    let length = array.length
    for(let p1=0;p1<length;p1++){
        for(let p2=0;p2<p1;p2++)
            if(array[p2]<array[p1] && array[p1]<array[p2+1]){
                array[p2+1]=array[p1];
                for(let p3=p2+1;p3<p1;p3++){
                    let temp = array[p3];
                    array[p3]=array[p1];
                    array[p1]=temp;
                }
            }
    }
    return array;
}


console.log(InsertionSort([6,5,3,1,8,7,2,4]));

/*** Bubble Sort */
function BubbleSort(Array) {
    let p1=0;
    let p2=1;
    let counter = Array.length-1;
    let holder =0;
    while(counter>=1){
        for(p1=0;p1<counter;p1++){
                if(Array[p1]>Array[p1+1]){
                    holder=Array[p1];
                    Array[p1]=Array[p1+1];
                    Array[p1+1]=holder;
                }
        }
        p1=0;
        p2=1;
        counter--;
    }
    return Array;
}
// console.log(BubbleSort([6,5,3,1,8,7,2,4]));
// console.log(BubbleSort([]));

/*** selection Sort */

function SelectionSort(Array){
    for(let p1=0;p1<Array.length;p1++){
        let minHolder=Array[p1];
        let indexHolder=p1;
        for(let p2=p1+1;p2<Array.length;p2++){
            if(Array[p2]<minHolder){
                indexHolder=p2;
                minHolder=Array[p2];
            }
        }
        let temp =Array[p1];
        Array[p1]=Array[indexHolder];
        Array[indexHolder]=temp;
    }
    return Array;
}
// console.log(SelectionSort([6,5,3,1,8,7,2,4]));


/*
8 6 2 6 9 3 1 4 0
step 1 8,6 


*/
