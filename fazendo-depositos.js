const cliente = {
    idade:36,
    nome:"André",
    cpf:"1254362266",
    email:"andre@email.com",
    fones:["5591235498", "5521988743124"],
    dependentes: [{
    nome:"Sara",
    parentesco:'filha',
    dataNasc:'20/03/2011'},
    {
    nome:'Samia Maria',
    parentesco:'filha',
    dataNasc:'04/01/2014'
        }
    ],
  saldo:100,
  depositar:function(valor){
    this.saldo += valor
  }
}


