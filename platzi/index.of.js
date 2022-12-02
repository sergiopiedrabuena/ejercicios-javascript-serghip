//El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
var array = [2, 9, 9];
console.log(array.indexOf(2));     // return 0
console.log(array.indexOf(7));     // return -1
console.log(array.indexOf(9, 2));  // return 2
console.log(array.indexOf(2, -1)); // return -1
console.log(array.indexOf(2, -3)); // return 0