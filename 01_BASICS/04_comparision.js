// console.log(2>1);

// console.log(2>=1);

// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);



//*************comparing different datatype************* */

// console.log("2">1);
// console.log("02">1);




// console.log(null>0);      //compariosion check, null is converted to number, i.e, 0.
// console.log(null == 0);    //equality check, nullnot converted
// console.log(null>=0);     //compariosion check, null is converted to number, i.e, 0.

// console.log((null<0));
// console.log(null<=0);



/*The reason is that an equality check(==) and comparisions(>,<,<=,>=) work differently.
Comparisions convert null to a number, treating it as 0.
That's why (3) null>=0 is true and (1) null>0 is false*/
//avoid these type of comparision
//---------------


// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined>=0);
// console.log(undefined<0);

// //with undefined all false




//=== => is called strict check ---it checks the values and data types also
console.log("2" === 2);     //false
console.log(2===3);     //false
console.log("2"==="2");


