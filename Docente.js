import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }


aprovaEstudante(estudante, curso){
    return `estudante ${estudante} aprovado(a) no curso ${curso}.` 
 }
}

const novoDocente = new Docente('Mariana', 'm@m.com', '2021-01-01')
