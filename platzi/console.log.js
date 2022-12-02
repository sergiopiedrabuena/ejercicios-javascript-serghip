//Impresion de mensaje en consola
console.log("mensaje");

//Impresion en grupo
var msj="mensaje en grupo/nivel"

console.group("grupo");
console.log(msj);
console.groupEnd("grupo");

//impresion en tabla
console.table([{name: "pepe", age: "18"},{name:"jorge", age:"102"}]);
