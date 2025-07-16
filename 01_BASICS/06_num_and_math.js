// //++++++++++++++++++++++++++++++NUMBERS+++++++++++++++++++++++++++++=
// const score=400
// console.log(score);


// const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString());  //converted to string
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));   //100.00

// const otherNumber=23.8966
// const otherNumber1=123.8966
// const otherNumber2=1123.8966
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber1.toPrecision(3));
// console.log(otherNumber1.toPrecision(4));
// console.log(otherNumber2.toPrecision(3));//remaining will be given in exponential


// const hundreds=1000000
// console.log(hundreds.toLocaleString()); //commas based on US standards

// console.log(hundreds.toLocaleString('en-IN'));//indian standards

// Number.  // -- u can see many functions



//+++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++

// console.log(Math);   // u can see in browser console

// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// console.log(Math.round(4.3));
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());  //always between 0 and 1, can include 0 and 1 also

console.log((Math.random()*10)+1);  //1-10   //+1 id done to-->in case random gives-- 0.04, after *10 it is  0.4, if we do +1-- 1.4
                             //So, min value will be always 1, not 0
console.log(Math.floor(Math.random()*10)+1); 

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)) +min );



