//***********      CONVERSIONS     *********/

// let score=33
// let score1="33"
// console.log(typeof(score));
// console.log(typeof(score1));

// let valueInNumber=Number(score1)    //converting into number
// console.log(typeof(valueInNumber));    //Number
// console.log(valueInNumber);   //33


// let score2="33abs"
// let score2Number=Number(score2)    
// console.log(typeof score2Number);
// console.log(score2Number);     //NaN

// //So dont relay on numbers, it gives NAN when i convert 

// let score3=null
// let score3Number=Number(score3)    
// console.log(typeof score3Number);   //number
// console.log(score3Number);          //0  
 

// let score4=undefined
// let score4Number=Number(score4)    
// console.log(typeof score4Number);  //number
// console.log(score4Number);     //NaN


// let score5=true
// let score5Number=Number(score5)    
// console.log(typeof score5Number);  //number
// console.log(score5Number);          //1

// let score6="rajitha"
// let score6Number=Number(score6)
// console.log(typeof score6Number);  //number
// console.log(score6Number);      //NaN


// console.log(typeof NaN);    //number






// "33" => 33
// "33abc" => NAN
// true => 1; false=>0
// typeof NAN=> number

//--------------------------------------------------------------------

// let isLoggedIn=1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);  //ture
// console.log(typeof booleanIsLoggedIn);  //boolean

// let isLoggedIn1=""
// let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
// console.log(booleanIsLoggedIn1);  //false
// console.log(typeof booleanIsLoggedIn1);  //boolean

// let isLoggedIn2=" "   //space in between
// let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2);  //true
// console.log(typeof booleanIsLoggedIn2);  //boolean

// let isLoggedIn3="Rajitha"   //space in between
// let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
// console.log(booleanIsLoggedIn3);  //true
// console.log(typeof booleanIsLoggedIn3);  //boolean


//converting into Boolean
//1 =>true; 0=> false
// "" =>false
// " "=> true;   "rajitha"=>true


//------------------------------------------

// let someNumber= 33
// let stringNumber= String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);   //so, converted into string


// let someNumber1= 33.3
// let stringNumber1= String(someNumber1);
// console.log(stringNumber1);
// console.log(typeof stringNumber1);   //so, converted into string



//***************OPERATIONs********* */

// let value=3
// let negValue= -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2**2);
// console.log(2**3);
// console.log(2%3);





// let str1="hello"
// let str2=" rajitha"
// let str3=str1+str2
// console.log(str3);

// console.log("1"+2);  //12
// console.log(1+"2");   //12
// console.log("1"+ 2 + 2);   //122
// console.log(1+2+"2");   //32  //1+2=3   3+"2"=32
// //If string is first-- everything is converted into string

// console.log(3+4*5%3);     //multiply--modulus--addition
// console.log((3+4)*5%3);     



// console.log(+true);    //1

// // console.log(true+);   //error
// console.log(+"");     //0   Boolean("") is also false


// let num1,num2,num3

// num1=num2=num3= 2+2


let gameCounter=100
gameCounter++;
console.log(gameCounter);      //101

let gameCounter1=100
++gameCounter1;      
console.log(gameCounter1);    //101

let gameCounter2=100
console.log(gameCounter2++);
console.log(gameCounter2);
console.log(++gameCounter2);

