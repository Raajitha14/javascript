
//{}---scope
// var c=300

// if(true){
//     let a=10
//     const b=20
//     var c= 30   // even if we just write c=30, same problem
// }

// // console.log(a);    //error: a is not defined --good, bcz its scope is inside the if condition
// // console.log(b);     //not available, good, bcz scope is inside if
// console.log(c);     //c is printed(o/p: 30), even if it is declared inside if, we r able to access it,


//--------------------------------------------


// let a=300    //local scope
// if(true){    //block scope
//     let a=30
//     console.log("INNER:",a);
    
// }
// console.log(a);


//----------------------------------------

function one(){
    const username="rajitha"

    function two(){
        const website="github"
        console.log(username);
        
    }
    // console.log(website); //cannot access website
    console.log("IN One"); 
    two()  
}
one()


//----------------------------

if(true){
    const username="rajitha"
    if(username=="rajitha"){
        const website="github"
        console.log(username +website);
        
    }
    // console.log(website);   //cannot accesss outside the scope
    
}
// console.log(username);   //canoot access outside the scope


//--------------------------------------------
//INTERESTING
console.log(addone(5))  //here we can access
function addone(num){
    return num +1
}



// console.log(addTwo(5))     //if we store function in a variable we cannot access it like this before the function declaration
                           
const addTwo=function(num){
    return num+2
}


//LEARN HOISTIONG & CLOSURE
