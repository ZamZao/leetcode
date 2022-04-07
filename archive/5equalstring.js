const equalStringSolution1 = (S,T) => {

    const finalString = (S1) => {

        const finalS1 = [];
        const sLength = S1.length;
        let j=0;
        for(let i =0;i<sLength;i++){
            if ( S1[i] !== "#" ){
                finalS1.push(S1[i]);
            } else {
                finalS1.pop();
                } 
            }
            return finalS1;
        }
        
        let finalS = finalString(S);
        let finalT = finalString(T);

        console.log(finalS);
        console.log(finalT);

        if ( finalS.length === finalT.length) {
            console.log('length is equal might be true, lets check further')
            
            let stringIsSimilar = true;
            let i=0;

            while (stringIsSimilar && i< finalS.length) {
                console.log({i})
                if (finalS[i]===finalT[i]) {
                    i++
                } else {
                    stringIsSimilar=false;
                }
            }
            console.log(stringIsSimilar);

        } else {
            console.log(' length is different, strings are not equal');
        }
    }
    // this is a bit messy and you could clean this up just by returning the false first
    // see below

    // 🟢 brut force solution

const equalStringSolution2 = (S,T) => {
    
    const finalString = (S1) => {
        
        const finalS1 = [];
        const sLength = S1.length;
        let j=0;
        for(let i =0;i<sLength;i++){
            if ( S1[i] !== "#" ){
                finalS1.push(S1[i]);
            } else {
                finalS1.pop();
            } 
        }
        return finalS1;
    }
    
    let finalS = finalString(S);
    let finalT = finalString(T);
    
    console.log(finalS);
    console.log(finalT);
    
    if (finalS.length !== finalT.length) {
        return (console.log('Not the same length, strings are not equal'));
    } else {
        for(let i=0;i< finalS.length;i++) {
            if (finalS[i]!==finalT[i]) {
                return (console.log({i},finalS[i],finalT[i],'Not the same value, strings are not equal'));
            } 
        }
    }
    return console.log('Same Strings');
} 
// equalStringSolution2("h###a#a#aao######abc","hehe####azc");


    // Optimal Solution

const optimalStringSolution = (S,T) => {

    let p1 = S.length-1;
    let p2 = T.length-1;

    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;
                while(backCount > 0) {
                    p1--;
                    backCount--;
                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            
            if(T[p2] === "#") {
                let backCount = 2;
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    
                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if (S[p1]===T[p2]){
                p1--;
                p2--;
            } else {
                return false;
            }
        }

    }
    return true;
}

optimalStringSolution("#h###a#a#aao######ab##zc","####zc");

// const string1 = "h###a#a#aao######ab##zc"
// const string2 = "####bzc"

// var backspaceCompare = function(S, T) {
//     let p1 = S.length - 1, p2 = T.length - 1;
    
//     while(p1 >= 0 || p2 >= 0) {
//         if(S[p1] === "#" || T[p2] === "#") {
//             if(S[p1] === "#") {
//                 let backCount = 2;
                
//                 while(backCount > 0) {
//                     p1--;
//                     backCount--;
                    
//                     if(S[p1] === "#") {
//                         backCount += 2;
//                     }
//                 }
//             }
            
//             if(T[p2] === "#") {
//                 let backCount = 2;
                
//                 while(backCount > 0) {
//                     p2--;
//                     backCount--;
                    
//                     if(T[p2] === "#") {
//                         backCount += 2;
//                     }
//                 }
//             }
//         } else {
//             if(S[p1] !== T[p2]) {
//                 return false;
//             } else {
//                 p1--;
//                 p2--;
//             }
//         }
//     }
    
//     return true;
// };

// console.log(backspaceCompare(string1, string2));
