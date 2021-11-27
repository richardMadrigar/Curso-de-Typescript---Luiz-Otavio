//super classe => acima da hierarquia de todas as outras
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
//subClasses
export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('fazendo algo nates');
    const result = super.getNomeCompleto();
    return result + 'HEYYYYYYYY';
  }
} //tudo que tem em pessoa tem em aluno

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do cliente:' + this.nome + ' ' + this.sobrenome;
  }
} //tudo que tem em pessoa tem em Cliente

const pessoa = new Pessoa('richard', 'madrigar', 1, '482829282928');
const aluno = new Aluno('richard', 'madrigar', 1, '482829282928', '0001');
const cliente = new Cliente('richard', 'madrigar', 1, '482829282928');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
