const test1 = [1,2,3];
const test2 = [2,2,2];
const test5 = [6,7,8,1,4];
const test3 = [];
const test4 = [1];

const twoSum = (nums,target) => {
    const hashNTF = {};
    let arrLength= nums.length;
    for (let i = 0;i<arrLength;i++) {
        const NTF = target - nums[i];
        if (hashNTF[nums[i]] > -1) {
            return console.log(hashNTF[nums[i]],i);
        } else {
            hashNTF[NTF]=i;    
        }

}
}
twoSum(test5,15);

const twoSum = (nums,target) => {
    const hashNTF = {};
    let arrLength= nums.length;
    for (let i = 0;i<arrLength;i++) {
        const NTF = target - nums[i];
        if (hashNTF[nums[i]] > -1) {
            return console.log(hashNTF[nums[i]],i);
        } else {
            hashNTF[NTF]=i;    
        }

}
}
twoSum(test5,15);

// console.log('------------------');
// const hash={};
// console.log(hash);
// hash[10]=1;
// console.log(hash);

// let myMap = new Map();
// myMap.set(44, 33);
// myMap.set(34, 100);
// myMap.set(32, 3);
// myMap.set(32, 4);

// console.log(myMap.has(44));
// console.log(myMap.has(34));
// console.log(myMap.has(356));
// console.log(myMap.size);
// console.log(myMap);

// console.log('////')

// const myObj = {}

// myObj['z']=33;
// myObj[44]=33;
// myObj['x']=100;
// myObj[34]=100;
// myObj['z1']=3;
// myObj[32]=3;
// myObj[32]=3;

// console.log(myObj)
