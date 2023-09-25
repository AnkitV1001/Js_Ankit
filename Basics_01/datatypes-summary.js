//Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BogInt

const score=100
const scoreValue=10.5

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id == anotherId);

const bigNumber=2347474747474474747474n

//Reference(Non-Primitive)

//Array, Objects, Functions

const heros=["IronMan","Captain Marvel","Captain America"]

let myObj={
    name:"Ankit",
    age:23
}

//In Js we can also treat function as variable

const myFunction=function(){
    console.log("Hello World");
}

//Primitive datatypes
console.log(typeof bigNumber); // bigint
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof id); //function symbol

//Non Primitives datatypes
console.log(typeof outsideTemp);//object
console.log(typeof myObj); //object
console.log(typeof heros); //object
console.log(typeof myFunction); //function object

