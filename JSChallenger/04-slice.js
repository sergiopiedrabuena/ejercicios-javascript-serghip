function myFunction(a){
    return a.slice(0, 3);
    //or return a.substr(0,3)
}

console.log(myFunction('abcdefg')) //Expected 'abc'
console.log(myFunction('1234')) //Expected '123'
console.log(myFunction('fgedcba')) //Expected 'fge'