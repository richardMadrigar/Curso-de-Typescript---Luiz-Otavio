type MapStringCallback = (item: string) => string; //tipo para funcao

const abc = ['a', 'b', 'c'];

export function mapString(
  array: string[],
  callbackfn: MapStringCallback,
): string[] {
  const newArray: string[] = []; //criando novo array

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abcMapped = mapString(abc, (item) => item.toUpperCase());

console.log(abcMapped);
