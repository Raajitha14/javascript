
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


let a=300    //local scope
if(true){    //block scope
    let a=30
    console.log("INNER:",a);
    
}
console.log(a);
