import User from "./User.js";

export default class Admin extends User {
    constructor(nome,email,nascimento,role = 'admin',ativo = true){ 
        super(nome,email,nascimento,role,ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

//const novoAdmin = new Admin('Eusébio', 'e@e.gmail.com','1993-04-14');
//console.log(novoAdmin);
//console.log(novoAdmin.exibirInfos());
//console.log(novoAdmin.criarCurso('JS',20));