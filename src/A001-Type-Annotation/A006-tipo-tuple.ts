//  Tuple
const dadosCliente: readonly [number, string] = [1, 'Luis'];
const dadosCliente2: [number, string, string] = [1, 'Luis', 'madrigar'];
const dadosCliente3: [number, string, string?] = [1, 'Luis'];
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Luis',
  'miranda',
  'miranda',
];

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly array
const array1: readonly string[] = ['luiz', 'madrigar'];
console.log(array1);
