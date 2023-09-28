const arr=[1,2,3,4,5,6]

// console.log(arr); //[1,2,3,4,5,6]

// Arrays methods

arr.push(8)

// console.log(arr);// [1,2,3,4,5,6,8]

arr.pop();

// console.log(arr); // [1,2,3,4,5,6]

arr.unshift(12)

// console.log(arr);// [12,1,2,3,4,5,6]

// console.log(arr.shift()); // 12

// console.log(arr); // [1,2,3,4,5,6]

// console.log(arr.includes(9)); // false
// console.log(arr.includes(4)); // true

arr.shift();

const newArr=arr.join()

// console.log(arr); // [1,2,3,4,5,6]
// console.log(newArr); // 1,2,3,4,5,6

// console.log(typeof arr);  // object
// console.log(typeof newArr); // string

// slice and splice

console.log("A: "+arr);// A: 1,2,3,4,5,6

const a1=arr.slice(1,3)

console.log(a1); // [2,3]

console.log("B: "+arr);// A: 1,2,3,4,5,6

console.log(typeof arr); // object

console.log(arr);//[1,2,3,4,5,6]

const a2=arr.splice(1,3)

console.log(a2); // [2,3,4]

// console.log(arr);//[1,5,6]


