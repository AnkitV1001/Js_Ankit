// Singleton
// Object.create

// Object literals

const mySymbol= Symbol("key1")

const info={
    name:"Ankit",
    "full name":"Ankit Verma",
    [mySymbol]:"myKey",
    email:"akv280501@gmail.com",
    age:23,
    city:"Mathura",
    isActive:true
}

// console.log(info.age); //23
// console.log(info["age"]); //23
// console.log(info["full name"]); //Ankit Verma

// console.log(mySymbol);//Symbol(key1)
// console.log(info.mySymbol); //myKey
// console.log(typeof info.mySymbol); //String

// console.log(info[mySymbol]); //myKey
// console.log(info);

// info.email="ankit@gmail.com"

// console.log(info);

// Object.freeze(info)

// info.email="idmailchanged@no.com"

// console.log(info);

// info.fun1=function(){
//     console.log("Hi Ankit");
// }

// console.log(info.fun1); //[Function (anonymous)]
// console.log(info.fun1()); //hi Ankit
// console.log(info);

info.fun2=function(){
    console.log(`Your city is ${this.city}`);
}

console.log(info.fun2());

