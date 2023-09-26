//Dates

let myDate=new Date()

/** 

console.log(typeof myDate); // object

console.log(myDate.toString()); //Tue Sep 26 2023 15:02:33 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //Tue Sep 26 2023 

console.log(myDate.toISOString()); //2023-09-26T09:32:33.937Z

console.log(myDate.toJSON()); //2023-09-26T09:32:33.937Z

console.log(myDate.toLocaleDateString()); // 9/26/2023

console.log(myDate.toLocaleString()); // 9/26/2023, 9:36:17 AM

console.log(myDate.toLocaleTimeString()); // 9:36:56 AM

console.log(myDate.toTimeString()); // 15:02:33 GMT+0530 (India Standard Time)

console.log(myDate.toUTCString()); // Tue, 26 Sep 2023 09:32:33 GMT

console.log(myDate.getTimezoneOffset()); // 0

*/

// let myCreatedDate=new Date(2001, 4, 28)

// let myCreatedDate=new Date(2001, 4, 28,5,3)


// console.log(myCreatedDate.toDateString()); // Mon May 28 2001

// console.log(myCreatedDate.toLocaleString()); // 5/28/2001, 5:03:00 AM

let myCreatedDate=new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM



// Lets try to learn time stamps , we use time stamps in making quizes and many ways

let myTimeStamp=Date.now();

// console.log(myTimeStamp); // 1695722272192 ms

// console.log(myCreatedDate.getTime()); // 1673634600000 ms

console.log(Math.floor(Date.now()/1000)); //1695722570

let newDate=new Date()

console.log(newDate);




