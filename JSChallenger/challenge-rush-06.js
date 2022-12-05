// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n){
    let x= a.slice(n-1,n);
    return x;
}

console.log(myFunction('hola',3)) //Expected: l
console.log(myFunction('JOrge',3)) //Expected: r
console.log(myFunction('mayor',5)) //Expected: r

