const formulario =[
    {
        nome:"augusto",
        robby: "academia",
        idade:21,
        sexo:"Masculino",
        interesses:["computador","programação"]
    },
    {
        nome:"Ana Luiza",
        robby: "academia",
        idade:19,
        sexo:"Feminino",
        interesses:["animais","roupas","glos"]
    }
]

// primeiro modo de fazer o find.

//console.log(formulario.find((item) => item.idade === 21))

//segunda forma de fazer find.

//console.log(formulario.find((item) =>{
    //return item.nome === "augusto"
//}))

// filter-> filtra dados de usuarios que tem algo em comum.

//console.log(formulario.filter((item) => item.robby === "academia" ));

const pessoa = new Object();

pessoa.nome = "Augusto";



