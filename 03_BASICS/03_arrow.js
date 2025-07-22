const user={
    username:"rajitha",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //when we want to refer to current context(username/ price) use this, if we dont use also here it'll work
        // console.log(this);   //shows the current context
        
    }
}



// user.welcomeMessage()

// user.username="Sam"
// user.welcomeMessage()

// console.log(this);   //empty context
// //but if we execute this in browser it  gives a Window object, not empty object



//--------------------------------------------------------


// function chai(){
//     let username="rajitha"
//     console.log(this);   //gives lot of values
    
//     console.log(this.username);  //undefined, the context works in object, in fun we cannot use this
    
// }
// chai()

//---------------------------------------------------------

// const chai=function(){
//     let username="rajitha"
//     console.log(this.username);
    
// }
// chai()   //undefined


//-------------------------------------------------------------------------
//ARROW FUNCTION
// const chai= () =>{
//     let username="rajitha"
//     console.log(this.username);   //undefined
//     console.log(this);   //empty obj
    
    
// }
// chai()




// const addTwo= (num1,num2)=>{
//     return num1+num2

// }
// console.log(addTwo(3,4));



//implicit return(no need to use return keywork and {})
// const addTwo= (num1,num2)=> 
//     num1+num2


// const addTwo= (num1,num2)=> 
//     (num1+num2)

//when {} is used, return keyword should be used, if we use () , dont use return keyword


//returning object
const addTwo= (num1,num2)=> ({username:"rajitha"})   // to return obj, use {}, and () outside

console.log(addTwo(3,4));