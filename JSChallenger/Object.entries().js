// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function myFunction (obj, key){
    for (const [myKey, myValue] of Object.entries(obj)) {
        if (`${myKey}` == key){
            return `${myValue}`;
        }
    }    
}

console.log(myFunction({continent:'Asia', country:'China'},'continent')) //Expected: Asia
console.log(myFunction({continent:'America', country:'Argentina'},'continent')) //Expected: America
console.log(myFunction({continent:'Europa', country:'España'},'continent')) //Expected: Europa