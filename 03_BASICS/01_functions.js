// console.log("H");
// console.log("I");
// console.log("H");
// console.log("E");


function sayMyName(){
    console.log("H");
    
}

// sayMyName()


// function addTwoNumbers(number1,number2){  //parameters
//     console.log(number1+number2);
    
// }
// addTwoNumbers(3,4)   //arguments
// addTwoNumbers()//NAN

// addTwoNumbers(3,"4")     //34
// addTwoNumbers(3,"a")   //3a
// addTwoNumbers(3,null)   //3

// const result=addTwoNumbers(3,5)   
// console.log("Result:",result);   //result stores return val, which is undefined





//The good way:
// function addTwoNumbers(number1,number2){  //parameters
//     let result=number1+number2
//     return result 
//     console.log("Rajitha");//never excecuted after return
      
// }

// const res=addTwoNumbers(3,5)
// console.log(res);





function addTwoNumbers(number1,number2){  //parameters
    return number1+number2      
}

const res=addTwoNumbers(3,5)
// console.log(res);




// function loginUserMessage(username){
//     return  `${username} just logged in`
// }

// loginUserMessage("Rajitha")  //no result, bcz we r not printing return value
// console.log(loginUserMessage("Rajitha") );
// console.log(loginUserMessage() );   //undefined just logged in




// function loginUserMessage(username){
//     if(username==undefined){    //can also write -- if(!username)
//      console.log("Please enter username")
//      return 
//     }
//          return  `${username} just logged in`
//  }

//  console.log(loginUserMessage())


 
 //If we want to avoid such cases of empty argument/ no username we can pass some default values:
// function loginUserMessage(username="Sam"){  //if username is not there, then it will consider sam as username
    
//          return  `${username} just logged in`
//  }

//  console.log(loginUserMessage())
//  console.log(loginUserMessage("Raj"));
 
//-------------------------------------


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))   //o/p: 200
// //That's why we should use rest operatot


//USING REST OPERATOR
function calculateCartPrice(...num1){    
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))   //now we get the array



function calculateCartPrice1(val1,val2,...num1){    
    return num1
}
// console.log(calculateCartPrice1(200,400,500,2000))   //val1=200, val2=400, rest all in num1




//PASSING OBJECT INSIDE FUNCTION

const user={
    username:"rajitha",
    price:199
}

function handleObject(anyObject){
    console.log(`Usename is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)

//can also pass obj directly
handleObject({
    username:"sam",
    price:399
})



//PASSING ARRAYS INSIDE FUNCTION
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));

