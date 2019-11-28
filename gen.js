/* eslint-disable */

function sayHello() {
  return 'hello';
}

function* sayHi() {
  const name = yield 'give me name';
  return name;
}
const hiGenerator = sayHi();
console.log(hiGenerator.next());
console.log(hiGenerator.next('tommy'));

// pętla for of
// przekazywanie wartości
