function myFunction(a, n) {
   
    return a.substr(n-1,3)
    //or
    //return a[n - 1];
}

console.log(myFunction('abcd',1)) //Expected 'a'
console.log(myFunction('zyxbwpl',5)) //Expected 'w'
console.log(myFunction('gfedcba',3)) //Expected 'e'