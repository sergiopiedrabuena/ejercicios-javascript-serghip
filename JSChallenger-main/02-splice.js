function myFunction(a) {
    return a.slice(0, 3)
}

console.log(myFunction([1,2,3,4])) //Expected[1,2,3]
console.log(myFunction([5,4,3,2,1,0])) //Expected [5,4,3]
console.log(myFunction([99,1,1])) // Expected [99,1,1]

//slice remueve elementos dejando el arreglo original sin modificar
//splice efectua las modificaciones en el arreglo original
