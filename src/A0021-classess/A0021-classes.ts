export class Empresa {
  readonly nome: string; //public é redundante //não necessario colocar
  private readonly colaboradores: Colaborador[] = []; // iniciando com array vazio
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  //criar colaboradores
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  //criar colaboradores
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '23.425.111/0001-11');
const colaborador1 = new Colaborador('richard', 'madrigar');
const colaborador2 = new Colaborador('luiz', 'otavio');
const colaborador3 = new Colaborador('maria', 'silva');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);
