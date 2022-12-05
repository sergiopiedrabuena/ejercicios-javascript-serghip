// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a' 

function myFunction ( a, n ) { 
    let x = a[n-1]; 
    return x;
}

console.log(myFunction([0,1,2,3,4], 1)) //Expected: 0
console.log(myFunction([4,1,6,2], 4)) //Expected: 2
console.log(myFunction([0,1,2,3,4], 7)) //Expected: undefined