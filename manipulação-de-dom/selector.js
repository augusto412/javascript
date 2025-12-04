

const mesmoElemento =document.querySelector('#container');
console.log(mesmoElemento);

const outraModo =document.querySelectorAll('.container');
console.log(outraModo);

//--------------------------------------------------

const titulo =document.getElementsByClassName('titulo');

for(let i = 0; i <titulo.length; i++){
    titulo[i].style.color = 'green'
    titulo[i].style.fontWeigth ='bold'
    titulo[i].style.textDecoration = 'underline'
};

 