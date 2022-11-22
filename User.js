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

    get nome(){ //permite o acesso do atributo privado #nome a partir de fora da classe- é uma funcao do tipo somente leitura
        return this.#nome
    }

    get email(){
        return this.#email;
    }


    get nascimento(){
        return this.#nascimento;
    }


    get role(){
        return this.#role;
    }


    get ativo(){
        return this.#ativo;
    }

   

    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role
        })
    }

    set nome(novoNome) {
        if(novoNome === '') {
            throw new Error('formato não válido');
        }
        this.#nome = novoNome;
    }
    
    //na sintaxe de classe nao usamos function
    exibirInfos(){
        const objUser = this.#montaObjUser() //de dentro da mesma classe podemos acessar o metodo privado #montaObj
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
 }

// const novoUser = new User('Eusébio', 'E@E.com','2021-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser)) //true