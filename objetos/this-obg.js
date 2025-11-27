const dados = {
    nome:"augusto",
    robby: "academia",
    idade:21,
    sexo:"Masculino",
    interesses:["computador","programação"],
    getNome: function (){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    getNomeEIdade: function(){
        return `meu nome é${this.getNome()} e minha idade é ${this.getIdade()}!`
    },
    getRobby: function(){
        return this.robby
    },

}
console.log(dados.getNomeEIdade());

//function() {} = herda o escopo em que foi definido.