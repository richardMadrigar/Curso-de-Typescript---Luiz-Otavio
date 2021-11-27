enum Cores {
  VERMELHO = 10, //0
  AZUL = 100, //1
  AMARELO = 200, //2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}
export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO);
