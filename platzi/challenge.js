/*
En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. Debes encontrar al usuario 
con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.
*/
//Input: 
const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

//Solution:
function solution(users, id) {
    userMatch = users.find((user) => user.id == id)
    if (userMatch) {
      return userMatch.name
    } else {
      return false
    }
  }

//output
console.log(solution(users, 456)); //output expected: Juanita Alcaparra
console.log(solution(users, 999)); // output expected: false