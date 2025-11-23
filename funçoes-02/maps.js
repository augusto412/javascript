
const compras = ["feijão","arroz","ovo"];
console.log(compras);

//compras.map((itens)=>{
    //console.log(itens)
//})

const marca =  ["honda","toyota","dodge","maclaren","ferrari"]

marca.map((itens)=>{
    console.log(itens)
})

//----------------------------------------------

const vendasdodia = [250, 800, 600, 200, 752, 3, 10, 30];
let total = 0;

vendasdodia.map((valorvenda) =>{
    console.log(total);
    total = total + valorvenda;
});
console.log(total);