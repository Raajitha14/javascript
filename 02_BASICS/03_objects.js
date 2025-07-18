//singleton
// Object.create--constructor method




const mySym=Symbol("key")
// console.log(mySym);   //Symbol(key)

//object literals
const JsUser={
    name:"Rajitha",
    "full name":"rajitha k r",       //cannot access using .(dot)
    [mySym] :"mykey1",   //should use square bracket
    age:18,
    email:"rajitha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(JsUser.name);  //not good practice to access the values

// console.log(JsUser["email"]);  //good practice


// // console.log(JsUser.full name);  //cannot do,there is a space

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="rajitha@google.com"

// Object.freeze(JsUser)   //If we freeze then any changes done will not be propagated

JsUser.email="rajitha@microsoft.com"   //This will not be propagated
// console.log(JsUser["email"]);    //prev one--rajitha@google.com


// console.log(JsUser);

JsUser.greeting=function(){

    console.log("Hello JS");

}
console.log(JsUser.greeting);    //reference of function

console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingTwo());
