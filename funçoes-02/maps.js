
const compras = ["feijão","arroz","ovo"];
console.log(compras);

compras.map((itens)=>{
    //console.log(itens)
})

const marca =  ["honda","toyota","dodge","maclaren","ferrari"]

marca.map((itens)=>{
    console.log(itens)
})

//----------------------------------------------

const vendasdodia = [250, 800, 600, 200, 752, 3, 10, 30];
const total = vendasdodia.reduce((acumulador, valorvenda) => acumulador + valorvenda, 0);

console.log(total);

//vendasdodia.map((valorvenda) =>{
    //total = total + valorvenda;
//});
//---------------------------------------------------------
