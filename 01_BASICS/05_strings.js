const name="rajitha"
const repoCount=10

// console.log(name+repoCount +"Value");    //outdated practice

console.log(`Hello my name is ${name} and repo count is ${repoCount}`)  //String Interpolation-- ${}
//using backticks to enclose string-- template literals

const gameName= new String('Rajitha-K-R') //another way to declare string --using objects

console.log(gameName[0]);       //it is not array, it is key value pair
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));
//original value is not changed, bcz string is a primitive data type-- stored iin stack memory

const newString=gameName.substring(0,4)  //2nd value excluded
console.log(newString);
//in substring we cannot use -ve values

const anotherString=gameName.slice(-3,10)
console.log(anotherString);
//in slice can use -ve values- considers from end

const newStringOne="   rajitha     "
console.log(newStringOne);
console.log(newStringOne.trim());
//we have trimStrat() and trimEnd() also


const url="https://rajitha.com/rajitha%20saralaya"
console.log(url.replace('%20','-'));

console.log(url.includes('rajitha'));

console.log(gameName.split('-',2));

console.log(gameName.split('-',3));
console.log(gameName.split('-'));

console.log(Array.from(gameName));  //creating array from string

