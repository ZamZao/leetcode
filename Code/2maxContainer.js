const maxArea = (arr) => {

    let p1 = 0;
    let p2 = arr.length-1;
    let maxArea = 0;
    let Area = 0;

    console.log({p1},{p2},arr[p1],arr[p2],{maxArea},{Area});
    while (p1<p2) {
      

        if ( arr[p1]-arr[p2] < 0 ) { 
            Area = (p2-p1)*arr[p1];
            maxArea=Math.max(maxArea,Area);
            console.log({p1},{p2},arr[p1],arr[p2],{maxArea},{Area});
            p1++;
            
        }   else {
            Area = (p2-p1)*arr[p2]; 
            maxArea=Math.max(maxArea,Area);
            console.log({p1},{p2},arr[p1],arr[p2],{maxArea},{Area});
            p2--;
        }

    }
    console.log(maxArea);
}

maxArea([11,2,11,30,10,10]);