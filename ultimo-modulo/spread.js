const number = [1,2,3];

const newNumbers = [...number];

console.log(number);


const frutas = ['banana', 'pera', 'abacaxi'];

const novaFruta = [...frutas];

console.log(novaFruta);

const base =[2,3];

const newBase = [1,...base,4];

console.log(newBase);

//-----------------------------------------------

const user = {name: 'Augusto', age: 21};
const details = {city: "São Paulo", state: "SP"};

const newUSer = {...user};
const NewUser = {...user, age: 22};
const UserDetails = {...user, ...details};

console.log(UserDetails);


