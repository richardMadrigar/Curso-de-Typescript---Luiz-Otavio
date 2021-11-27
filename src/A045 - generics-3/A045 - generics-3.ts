interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'richard',
  sobrenome: 'madrigar',
  idade: 22,
};

console.log(aluno);
