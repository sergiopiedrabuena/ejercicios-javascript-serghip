var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

//order by name(extendend form)
// items.sort(function (a, b) {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });
//order by value(extendend form)
items.sort(function (a, b) { return a.value - b.value });

console.log(items)