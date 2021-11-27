type User = { username: string; password: string }; //tipo para variaveis
type VerifyUserFn = (user: User, sentValue: User) => boolean; //tipo para funcao

//funcao para verificar igualdade
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    //comparando e retornando um boolean
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '1234567' };

const loggedIn = verifyUser(bdUser, sentUser); //chamando FN que compara

console.log(loggedIn);
