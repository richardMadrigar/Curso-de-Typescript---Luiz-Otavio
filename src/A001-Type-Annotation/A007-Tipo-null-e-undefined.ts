let x; //variavel sem tipo

if (typeof x === 'undefined') x = 20; //verificando se é undefined, se n então => x =20
console.log(x * 2);

export function create(
  firstName: string, //tipo
  lastName?: string, //tipo
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

//unknown deixa livre para enviar qualquser coisa
export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2); //chamando FN e guardando na variavel

//verificando se é number ou diferente
if (squareOfTwoNumber === null) {
  console.log('conta invalida');
} else {
  console.log(squareOfTwoNumber * 10);
}
