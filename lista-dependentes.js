const cliente = {
    idade:36,
    nome:"André",
    cpf:"1254362266",
    email:"andre@email.com",
    fones:["5591235498", "5521988743124"],
    dependentes: [{
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
    }]  

}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova[0].nome);