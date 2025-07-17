const arr1=["Raj","nan","sun"]
const arr2=["ninja","geek","leet"]

// arr1.push(arr2);
// console.log(arr1);  //array inside arr

//push changes original arr

// console.log(arr1[3]);
// console.log(arr1[3][1]);

// arr1.concat(arr2)
// console.log(arr1);   //concat doenst chnage original arr

// const arrConcat=arr1.concat(arr2);
// console.log(arrConcat);

// const spreadArr=[...arr1,...arr2]  //spread op--spreads all elem of arrays
// console.log(spreadArr);

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flat_anotherArr=anotherArr.flat(1)
console.log(flat_anotherArr);

const flat_all=anotherArr.flat(Infinity)
console.log(flat_all);

console.log(Array.isArray("Rajitha"))

console.log(Array.from("Rajitha"))

console.log(Array.from({name:"rajitha"})); //empty arr



let score1=100
let score2=200
let score3=300

console.log(Array.from(100));

console.log(Array.of(score1,score2,score3));
console.log(Array.of("rajitha"));

