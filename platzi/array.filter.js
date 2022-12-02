//filter es una funcion de array que toma cada uno de los elementos del mismo y recibe como parametro una funcion 
//que la analiza y debe devolver un true para casos que cumplan la condicion deseada, devolviendo asi el objeto analizado.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

