//singleton
// const tinderUser=new Object()
// console.log(tinderUser);


const tinderUser={}
// console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{                  //object inside object
        userfullname:{
            firstname:"rajitha",
            lastname:"saralaya"
        }

    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


//JOINING THE OBJECTS

// const obj3={obj1,obj2}  //it will give objects inside another obj
// console.log(obj3);


// const obj3=Object.assign(obj1,obj2)  //obj1 will act like target, all other (obj2) will be source, all other will be added to obj1
// console.log(obj3);
// console.log(obj3==obj1);  //true, bcz all other objects added inside obj1


// const obj3=Object.assign({},obj1,obj2) //{}---optional, but here target will bw an emmpty object
// console.log(obj3);


const obj3={...obj1,...obj2}   //this is used most
// console.log(obj3);


//-----------------------------------------------------------------------------------------

//when values come from databases
const users=[    //array of objects
    {
        id:1,
        email:"h@gmail.com"

    },
     {
        id:2,
        email:"i@gmail.com"

    },
     {
        id:3,
        email:"j@gmail.com"

    },
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //we get output inside an array
//                              //bcz we can use loop when we want
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  //o/p in-- array inside array


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //true
// console.log(tinderUser.hasOwnProperty('isLoggedOut'));   //false


const course={
    coursename:"js course",
    price: "999",
    courseInstructor:"varun"
}

//OBJECT DESTRUCTURING -will be used in react
const {coursename}=course
console.log(coursename);

const {courseInstructor:instructor}=course   //can also change the name of variable 
console.log(instructor);

//the backend data comes in json format

//JSON:
// {
//     "name":"rajitha",
//     "coursename":"js course",
//     "price":"5000"
// }

