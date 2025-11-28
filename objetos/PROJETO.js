
const gerenciadorDeNotas ={
    notas: [
        { id: 1, titulo: "jogar o lixo fora", conteudo: "minha mulher vai brigar"}
    ],

    adicionarNota: function( idnovanota, titulo, conteudo) {
        this.notas.push({ idnovanota, titulo, conteudo})
    },

    buscarNota: function(titulo) {
        return this.notas.find((nota) => nota.titulo === titulo);
    },

    FiltraNota: function(titulo){
        return this.notas.filter ((nota) => nota.titulo.includes(titulo));
    },

    atualizarNota: function(id, tituloEditado, conteudoEditado){
       const index = (this.notas.findIndex((nota) => nota.id === id));

       if(!index){
        return "não encontrado"
       }
       
       gerenciadorDeNotas.notas[index] = {id: id, titulo:tituloEditado, conteudo:conteudoEditado};

       return gerenciadorDeNotas.notas;
    }
}

gerenciadorDeNotas.adicionarNota(2,"lavar roupa", "todas estão sujas");
gerenciadorDeNotas.adicionarNota(3,"comprar novo teclado", "esse esta horrivbel");
gerenciadorDeNotas.adicionarNota(4,"estudar 4 aulas por dia!", "modulo 2 de JS!");
gerenciadorDeNotas.adicionarNota(5,"lembrar de tomar cafe antes das aulas", "voce sempre deixar esfirar");

gerenciadorDeNotas.atualizarNota(2, "nota editada", "nova nota")

console.log(gerenciadorDeNotas.FiltraNota("aulas"))