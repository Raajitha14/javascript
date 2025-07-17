//singleton
// Object.create--constructor method


//object literals

const mySym=Symbol("key")
// console.log(mySym);   //Symbol(key)


const JsUser={
    name:"Rajitha",
    "full name":"rajitha k r",       //cannot access using .(dot)
    [mySym] :"mykey1",   //should use square bracket
    age:18,
    email:"rajitha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

console.log(JsUser.name);  //not good practice to access the values

console.log(JsUser["email"]);  //good practice


// console.log(JsUser.full name);  //cannot do,there is a space

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


