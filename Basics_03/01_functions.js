
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// sayMyName

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumber(12,13) //25
// addTwoNumber() //NaN

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
addTwoNumbers(12,13) 

// let result=addTwoNumbers(12,13);
// console.log(addTwoNumbers(12,13));//25
// console.log(result);//25

function logInUserMessage(username){
     if(!username){
        console.log("PLease enter a username");
            return
     }

    return `${username} just logged in`
}

// console.log(logInUserMessage("Ankit")) // Ankit  just logged in
// console.log(logInUserMessage("")) // Ankit  just logged in


// function calculateCartPrice(num){
//     return num
// }

// console.log(calculateCartPrice(100,200,300,400));//100


// function calculateCartPrice(...num){
//     return num
// }

// console.log(calculateCartPrice(100,200,300,400));//[100,200,300,400]

// function calculateCartPrice(val1,val2,...num){
//     return num
// }

// console.log(calculateCartPrice(100,200,300,400));//[300,400]

const user = {
    username: "Ankit",
    prices: 1299
}

function handleObject(anyObj){
  console.log(`My name is ${anyObj.username} and I want to give you ${anyObj.prices}`);
}

// handleObject(user)  //My name is Ankit and I want to give you 1299

// handleObject({
//     username: "sam",  // //My name is Ankit and I want to give you undefined
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
