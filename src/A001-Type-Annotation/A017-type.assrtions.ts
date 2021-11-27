//Recomendado

//condicional // se n tem ctz que existe
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

//Type assertion //se tiver certeza que existe
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'qualquer coisa';
input.focus();

//não recomendado
//non-null assertion (!) //
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
