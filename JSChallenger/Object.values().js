const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

console.log(object1.c);
// expected output: false

console.log(object1.a.slice(-4));
// expected output: 'ring'


