import Docente from "./Docente.js";
import User from "./User.js";

export default class Admin extends User {
    constructor(nome,email,nascimento,role = 'admin',ativo = true){ 
        super(nome,email,nascimento,role,ativo)
    }

    exibirInfos() {
        return `${this.nome},${this.role},${this.ativo}`
    }

    nomeAdmin() {
    //    return `${this.#nome}` //a propriedade nome é herdada da classe user e por ser privada não pode ser acessada de fora da classe user.
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Eusébio', 'e@e.gmail.com','1993-04-14');
console.log(novoAdmin.nome);
//console.log(novoAdmin.exibirInfos());
//console.log(novoAdmin.criarCurso('JS',20));

