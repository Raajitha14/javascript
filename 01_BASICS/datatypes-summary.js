// Primitive  --are call by value
//7 types: String, Number, Boolean , null ,undefined, Symbol- to make any value unique, BigInt

const score=100   //number
const scoreValue= 100.3  //Number
const isLoggedIn=false //boolean
const outsideTemp= null  //null, not zero, temperature is null or empty
let userEmail=undefined   //undefined
let userEmail1;   //undefined

const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);           //false, bcz even if value passed is same, return value will be always diff, as we used Symbol

const bigNumber=67887645678768789790n          //add an n at end to store as BigInt    

//--------------------------------------------------

// Non Primitive / Reference type
//Array, Objects, Functions
const heros=["shaktiman","naagraj","doga"]  //array

let myObj={
    name:"rajitha",
    age: 22,

}                        //object

const myFunction=function(){
    console.log("Hello world");
    
}

//----------------------------------------------------


console.log(typeof bigNumber);
console.log(typeof outsideTemp);   
console.log(typeof scoreValue);

console.log(typeof myFunction);   //0/p: function   //actually: object funtion
console.log(typeof heros);    //object
console.log(typeof myObj);   //object


console.log(typeof id);        //symbol






//Javascript is a dynamically typed language , because the compiler performs type check during run time
         //ex:javascript, python
//staticallt typed lang--compiler perfoems type check during compile time itself, it will show error before code gets exucuted--
          //ex: c,c++,java