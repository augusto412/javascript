const titulo = document.getElementById('titulo');
titulo.textContent = 'hoje foi um otimo dia';

const elementoVerde =document.getElementsByClassName('elementos-verdes');

for(let i = 0; i <elementoVerde.length; i++){
    elementoVerde[i].style.color ='brown';
};

const tituloTeste = document.getElementById('titulo02');
tituloTeste.textContent = 'minha primeira alteração';
tituloTeste.id = 'augusto'

const estiloTitulo =document.getElementsByClassName('titulostyle');

for(let i = 0; i < estiloTitulo.length; i++){
    estiloTitulo[i].style.color ='blue'
}
