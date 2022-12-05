// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction(a, b){
    let x=false;
    if (a === b){
        x= true;
    }
    return x;
}

console.log(myFunction(1,3))//Expected:false
console.log(myFunction(5,5))//Expected:true
console.log(myFunction(2,"2"))//Expected:false
console.log(myFunction(7,7))//Expected:true
