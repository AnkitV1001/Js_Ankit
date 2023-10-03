var c = 300
let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     c=30;
//     // console.log("INNER: ", a);
    
// }

// console.log(a); //300
// console.log(b);
// console.log(c); //30

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// one()

if (true) {
    const username = "Ankit"
    if (username === "Ankit") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addone(12));

function addone(num){
    return num + 1
}

console.log(addTwo(5)) //error

const addTwo=function addone(num){
    return num + 1
}




