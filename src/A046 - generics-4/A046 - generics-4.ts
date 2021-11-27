type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const ObterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacinas: ['vacina', 'vacina2'],
  idade: 10,
};

const vacinas = ObterChave(animal, 'vacinas');
const cor = ObterChave(animal, 'cor');

console.log(vacinas, cor, ObterChave(animal, 'idade'));
