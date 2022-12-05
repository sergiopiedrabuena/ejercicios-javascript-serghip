// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction (obj){
    let x = obj.country;
    return x;
}

console.log(myFunction({country:"ARG", city:"Bs. As."})); //Expected: ARG
console.log(myFunction({country:"MX", number:48})); //Expected: MX
console.log(myFunction({message: "Hello world", country:"COL"})); //Expected: COL
