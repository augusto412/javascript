const valordolar = 5.35;
const valoreuro = 5.77;

const lotetranferencia =[10000, 20000, 5000, 60000, 770000, 550, 7000000, 500000, 300, 4000];

//consersor de dolar

const ConverterReaisEmDolar = lotetranferencia.map((valor) =>{
    return valor / valordolar;
})
console.log(ConverterReaisEmDolar);

//------------------------------------------------------------

//conversor de euro

const ConverterReaisEmEuro = lotetranferencia.map((valor)=>{
    return valor / valoreuro;
});

console.log(ConverterReaisEmEuro);

