export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('nao escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo...`);
  }
}

export class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando...`);
  }
}

const escritor = new Escritor('luiz');
const caneta = new Caneta('bic');
const maquinaDeEscrever = new MaquinaDeEscrever('maquina');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquinaDeEscrever.nome);
escritor.ferramenta = maquinaDeEscrever;

escritor.escrever();
