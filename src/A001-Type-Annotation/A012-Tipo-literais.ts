let x = 10; //eslint-disable-line
x = 423424;
const y = 10;

const a = 100  ; //eslint-disable-line

const pessoa = {
  nome: 'luis' as const,
  sobrenome: 'madrigar',
};

function escolhaCor(cor: 'vermelho' | 'amarelo' | 'azul'): string {
  return cor;
}

console.log(escolhaCor('amarelo'));

//module mode
export default 1;
