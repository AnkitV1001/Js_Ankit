// Immediately Invoked Function Expressions (IIFE)

(function name(){
    console.log("Hi ankit");
})();

(()=>{
    console.log("Hi ankit");
})();

((name)=>{
    console.log(`Hi ${name}`);
})("astha");