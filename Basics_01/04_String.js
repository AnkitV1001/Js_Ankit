const name="Ankit"
console.log(name);

const newName=new String("Ankita hi how are you")

console.log(newName.anchor("Ankita")); // <a name="Ankita">Ankita hi how are you</a>

console.log(newName.at(7)) //h

console.log(newName.big()) //<big>Ankita hi how are you</big>

console.log(newName.charCodeAt(5)) // 97
console.log(newName.charCodeAt(0)) // 65


console.log(newName.endsWith("you")) // true

console.log(newName.fontcolor("red")) // <font color="red">Ankita hi how are you</font>

console.log(newName.fontsize(7)) // <font size="7">Ankita hi how are you</font>

const match="Ankit"

console.log(newName.includes(match)) // true

console.log(newName.italics()) // <i>Ankita hi how are you</i>



console.log(newName.link("www.google.com")) // <a href="www.google.com">Ankita hi how are you</a>

console.log(newName.padEnd(26,'.')); // Ankita hi how are you.....


const fullNumber="1234548332738"
const last4Digits=fullNumber.slice(-4)
const maskedNumber=last4Digits.padStart(fullNumber.length,"*")

console.log(maskedNumber); // *********2738


const reaction="Happy! "

console.log(`I am ${reaction.repeat(5)}`); // I am Happy! Happy! Happy! Happy! Happy! 


