//functio = função
// garson = nome da função
//() = receber ação
function garson(prato){
    console.log("entregar prato na mesa!")
}

//garson("strogonoff");

//------------------------------------------------------

//não precisa de "" ação

function porta(abrir){
    console.log("abrir porta!")
}

//porta("entrando")


const emailcorreto = "aluno@gmail.com"
const senhacorreta = "senha123"


function login(email, senha){
    //verificar se email e senha estao corretos

    if(email=== emailcorreto && senha === senhacorreta){
        console.log("login efetuado com sucesso");
    }else{
        console.log("email ou senha errado");
    }
}

login("aluno@gmail.com", "senha123")

//--------------------------------------------------

