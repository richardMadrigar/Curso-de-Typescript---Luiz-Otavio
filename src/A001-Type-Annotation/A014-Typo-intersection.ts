// & // AND

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type Temidade = { idade: number };
type Pessoa = TemNome & TemSobrenome & Temidade; //AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'richard',
  sobrenome: 'madrigar',
};
console.log(pessoa);

export { pessoa };
