const usuario = {
    nome:"maria",
    idade: 25,
    cidade: 'pará',
    email: "maria@gmail.com",
};

//forma antiga
const nomeUsuario = usuario.nome;
const idadeUsuario = usuario.idade;

//com desestruturação
const {nome, idade} = usuario;

///------------------------------------------

//desestruturação por array

const contato =[ 'ana', '83999271565', 'rio de janeiro'];

const [nomeContato, telefone, cidade] = contato;

console.log(contato);

let ranking = ['joão', 'maria', 'pedro'];

[ranking[0], ranking[1]] = [ranking[1], ranking[0]];
console.log(ranking)