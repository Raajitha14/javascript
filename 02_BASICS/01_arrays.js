const myArr=[0,1,2,3,4,5]

//when we copy an array- shallow copy will be created
//shallow copy of an object is the copy whose properties share the same reference
//deep copy of an object is the copy whose properties do not share the same reference

const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4) 
// console.log(myArr2[2]);


//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //inserts elem at beginning of arr,but while adding at beginning, we have to shift every elem
// myArr.shift()        //removes elem from beginning


// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));
// console.log(myArr.indexOf(3));


const newArr=myArr.join()  //adds elem to string and separates elems using a separator

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);  //string

// console.log(myArr.join('-'));



//slice, splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)  //3 excluded


console.log(myn1);
console.log("B", myArr);




const myn2=myArr.splice(2,4)  //1st-> from which index start deleting or adding
//2nd--total no of elem to be deleted //rest arguments all added to the arr
  //splice manipulates original arr
console.log(myn2);
console.log("C", myArr); 
