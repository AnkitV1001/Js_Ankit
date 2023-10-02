
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
console.log(logInUserMessage("")) // Ankit  just logged in

