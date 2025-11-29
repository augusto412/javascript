const lista_compras = [
    "feijão",
    'arroz',
    "macarrao",
    'farinha'
];

lista_compras.map((item) =>{
    //console.log(item)
});

for(i = 0; i < lista_compras.length; i = i + 1){
    //console.log (i)
};

const cor = [
    'azul',
    'preto',
    'branco',
    'verde',
]

//for (let i = 0; i < cor.length; i = i + 1 ){
    //console.log
//}

const num = [
    1,2,3,45,6,6,7,7
]

for (q = 0; q< num.length; q++){
    console.log(num[q])
}

const aluno = [
    'augusto',
    'javascript'
]

for (let chave in aluno){
    if(aluno[chave] === 'javascript'){
        encontrouCurso = true;
        break;
    }
}