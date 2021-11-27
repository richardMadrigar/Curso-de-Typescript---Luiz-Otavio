export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do aluno:' + this.nome + ' ' + this.sobrenome;
  }
} //tudo que tem em pessoa tem em aluno
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do cliente:' + this.nome + ' ' + this.sobrenome;
  }
} //tudo que tem em pessoa tem em Cliente

const pessoa = new Pessoa('richard', 'madrigar', 1, '482829282928');
const aluno = new Aluno('richard', 'madrigar', 1, '482829282928');
const cliente = new Cliente('richard', 'madrigar', 1, '482829282928');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
