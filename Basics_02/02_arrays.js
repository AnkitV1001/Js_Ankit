const cityname=["Mathura","Agra","Delhi","Goa"]
const name=["Ankit","Astha","Prem","Vishal"]

// cityname.push(name)

// console.log(cityname); //["Mathura","Agra","Delhi","Goa",["Ankit","Astha","Prem","Vishal"]]

// console.log(cityname[4][2]) // Prem

// const allName=cityname.concat(name)

// console.log(allName);// ["Mathura","Agra","Delhi","Goa","Ankit","Astha","Prem","Vishal"]

// const allNewName=[...cityname,...name];

// console.log(allNewName); //["Mathura","Agra","Delhi","Goa","Ankit","Astha","Prem","Vishal"]

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const singleArray=another_array.flat(2)// we use Infinite also

// console.log(singleArray);// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("ankit")); // false

const a1=Array.from("Ankit");


console.log(a1)// ['A', 'n', 'k', 'i', 't']

console.log(Array.from({name:"Ankit"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100,200,300]