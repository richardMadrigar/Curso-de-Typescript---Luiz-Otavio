//tipando obj

const objetoA: { readonly chaveA: string; chaveB: string } = {
  chaveA: 'valor a',
  chaveB: 'valor b',
};

objetoA.chaveB = 'outro valor'; //alterando valor
// objetoA.chaveC = 'Novo valor'; //isso n é possivel pq o tipo já foi inferido`

console.log(objetoA);
