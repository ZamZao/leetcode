// longest substring without repeating characters

const substringFinder = (str) => {

    let longest = 0;
    let arr = [];
    let strlength=str.length;
    let currentlength=0;
    console.log(str);

    for (i=0;i<strlength;i++) {
        arr.push(str[i]);
        j=0;
        for (j=i+1;j<strlength;j++){
            if (arr.indexOf(str[j]) != -1) { 
                currentlength=(j-i);
                longest = Math.max(currentlength,longest);
                arr=[];
                j=strlength;
            } else {
                arr.push(str[j]);
            }
            if (j=== strlength-1) {
                currentlength=(j-i);
                longest = Math.max(currentlength,longest);
                arr=[];
            }
            console.log({i},{j},str[j],arr.indexOf(str[j]),arr,{currentlength},{longest});
        }
    }
    return longest;
}

console.log(substringFinder('abbcde'));