function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

// Obj
const pessoa = {
  nome: 'Richard',
  sobrenome: 'Madrigar',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
    // console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'otavio');
pessoa.exibirNome();

export { pessoa };
