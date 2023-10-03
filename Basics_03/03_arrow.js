const user={
    userName:"Ankit",
    price:234,
    welcomeMessage:function(){
        console.log(`${this.userName} welcome to my platform`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName="Astha"
// user.welcomeMessage()

// console.log(this);

function gym(){
    let userName="Ankit"
    console.log(this.userName); 
}

// gym() //undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach((element)=> console.log(element))


