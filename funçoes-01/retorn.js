function garson(prato, mesa){
    return`${prato} entregue a ${mesa}`
}

//const returngarson = garson("hamburguer", "mesa");

//console.log(returngarson);

const emailcorreto = "aluno@gmail.com"
const senhacorreta = "senha123"

function login(email, senha){
    if(email === emailcorreto && senha === senhacorreta){
        return true;
    }else{
        return false;
    }
}
//const returnlogin = login("aluno@gmail.com", "senha123");
//console.log(returnlogin);

//------------------------

const lavar = "limpo"

function lavarocarro(carro){
    if(carro === lavar ){
        return "Seu carro ja esta limpo"
    }else{
        return "Seu carro não esta pronto"
    }
}
const retornlava = lavarocarro("limpo");
console.log (retornlava);

//-----------------------------------

const loja = "aberto"

function shooping(entrar){
    if(entrar === loja){
        return "pode entrar"
    }else{
        return "ainda esta fechado"
    }
}
const returnloja = shooping("aberto")
console.log(returnloja);

//-------------------------------------

const tempo = "descanso";

function hora(trabalho){
    if(trabalho === tempo){
        return "trabalhando"
    }else{
        return"parado";
    }
}
const returnhora = hora("descanso")
console.log(returnhora)