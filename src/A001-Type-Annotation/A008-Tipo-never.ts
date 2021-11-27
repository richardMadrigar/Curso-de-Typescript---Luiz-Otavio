//subir um erro, never não retorna nada
export function criaErro(): never {
  throw new Error('erro qualquer');
}

criaErro();
