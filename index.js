import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'm@m.com','2021-01-01');
console.log(novoUser.exibirInfos());


//novoUser.#nome = 'Marcia'; //erro

const novoAdmin = new Admin('Rodrigo', 'r@r','2021-01-01');
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome); //acessa atraves do getter

novoAdmin.nome = '';
console.log(novoAdmin.nome); // para a funcao getter relacionada ao atributo nome, usamos o mesmo nome que a funcao getter para facilitar na hora de chamar ambas as funções 
