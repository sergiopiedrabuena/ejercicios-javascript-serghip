// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str){
    let x = str.slice(-3);
    return x;
}
console.log(myFunction("hola")) //Expected: 4
console.log(myFunction("capa")) //Expected: 3
console.log(myFunction("increible")) //Expected: 5