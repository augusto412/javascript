

const gerenciadorDeNotas = {
    notas: [
        {titulo: "levar o lixo", conteudo: "a mulher já esta brava!"}
    ],

    adicionarNota: function(titulonovo, conteudonovo){
        this.notas.push ({titulo:titulonovo, conteudo: conteudonovo} )
    }
}

gerenciadorDeNotas.adicionarNota("lavar os pratos", "mãe ja esta brigando");

console.log(gerenciadorDeNotas.notas)