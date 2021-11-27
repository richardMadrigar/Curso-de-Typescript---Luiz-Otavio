type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPref?: string;
};

type CorRGB = 'vermelho' | 'verde' | 'azul';
type corCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto';
type CorPreferida = CorRGB | corCMYK;

export const pessoa: Pessoa = {
  idade: 30,
  nome: 'luiz',
  salario: 1000,
};

console.log(pessoa);

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPref: cor };
}

console.log(setCorPreferida(pessoa, 'azul'));
