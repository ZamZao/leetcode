//*** factorial
function factorial(value){
    let counter=value;
    let results= 1;
    results=value*factorial(value-1);
    return results;
}
// console.log(factorial(5));
// console.log(1*2*3*4*5);


//*** Fibonnaci

function fibbonaci(index){

    let results=0;

    if (index===0 || index==1) {
        return results=index;
    } else if (index<0) {
        return results=0;
    } else {
        // while(counter <=index){
            results=fibbonaci(index-1)+fibbonaci(index-2);
            // counter++;
        // }
    }
    return results
}

console.log(fibbonaci(0));
console.log(fibbonaci(1));
console.log(fibbonaci(2));
console.log(fibbonaci(3));
console.log(fibbonaci(4));
console.log(fibbonaci(5));
console.log(fibbonaci(6));
console.log(fibbonaci(7));
console.log(fibbonaci(8));

/*
fibonnaci(0)=0
fibannci(1)=1
fibonnaci(2)=fibonnaci(2-1=1)+fibonnaci(2-2=0)

fibbonacci(5)=fib4+fib3
            =fib3 + fib 2 + fib2 + fib1
            =fib2 + fib1 + fib2 + fib2 + fib1
            = fib1 + fib0 +fib1 + fib1+fib0+fib1+fib0+fib1
            =1 0 1 1 0 1 0 1 
            =5 


*/

