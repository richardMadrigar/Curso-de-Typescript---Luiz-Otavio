/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

//Arrays
//usando number
let arraydeNumeros: Array<number> = [1, 2, 3]
let arraydeNumeros2: number[] = [1, 2, 3] //a msm coisa que o exemplo de cima, forma reduzida

// usando string
let arraydeStrings: Array<string> = ['1', '2', '3']
let arraydeStrings2: string[] = ['1', '2', '3']


//Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'Richard',
  adulto: true
}
console.log(pessoa.nome)


// Funcões
//com retorno Number//no caso ele já saberia qual seria o retorno
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) =>  number = (x, y) => x + y
