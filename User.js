export default class User {
    constructor(nome,email,nascimento,role,ativo = true){
        this.nome = nome,
        this.email = email,
        this.nascimento = nascimento,
        this.role = role || 'estudante',
        this.ativo = ativo
    }
    //na sintaxe de classe nao usamos function
    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
 }

 const novoUser = new User('Eusébio', 'E@E.com','2021-01-01');
 console.log(novoUser);
 console.log(novoUser.exibirInfos());
 console.log(User.prototype.isPrototypeOf(novoUser)) //true