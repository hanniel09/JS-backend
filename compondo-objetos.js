const cliente = {
    idade:36,
    nome:"André",
    cpf:"1254362266",
    email:"andre@email.com",
    fones:["5591235498", "5521988743124"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)