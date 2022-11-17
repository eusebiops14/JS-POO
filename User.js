export default class User {
    #nome //atributo privado
    #email
    #nascimento
    #role
    #ativo
    constructor(nome,email,nascimento,role,ativo = true){
        this.#nome = nome,
        this.#email = email,
        this.#nascimento = nascimento,
        this.#role = role || 'estudante',
        this.#ativo = ativo
    }

    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role
        })
    }
    //na sintaxe de classe nao usamos function
    exibirInfos(){
        return `${this.#nome}, ${this.#email}`
    }
 }

// const novoUser = new User('Eusébio', 'E@E.com','2021-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser)) //true