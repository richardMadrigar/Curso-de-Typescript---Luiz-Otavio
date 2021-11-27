// Array usando <T> OU T []

export function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toLocaleUpperCase());
}

const result = multiplicarArgs(1, 2, 3);
const concatena = concatenaString('r', 'e', 'm');
const upper = toUpperCase('r', 'e', 'm');

console.log(result);
console.log(concatena);
console.log(upper);
