const cliente = [
{
    nome:"André",
    cpf:"1254362266",
    dependente:[{
    nome:"Sara",
    parentesco:'filha',
    dataNasc:'20/03/2011'},
    
    {
    nome:'Samia Maria',
    parentesco:'filha',
    dataNasc:'04/01/2014'
        }],  
    },

 { 
    nome:"Juliana",
  cpf:"56767867867",
  dependente: [{
    nome: "Sophia",
    parentesco: "filha",
    dataNasc: "30/08/2020"

  }],
 }
]

const listaDependentes = [...cliente[0].dependente,
...cliente[1].dependente]

console.table(listaDependentes)