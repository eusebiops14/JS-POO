//new serve para criar objetos através de funcções construtoras
// as funções construtoras são o equivalente no JS às classes de outras linguagens de Programação OO
// Funções construtoras eram uma das formas de se trabalhar com OO no JS antes da implementação das classes
//classes sempre iniciam com letra MAÍSCULA

function User(nome,email){
    this.nome = nome,
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome} , ${this.email}`
    }
}

//1- Criando Objetos com Construtor
//nesse caso User será o protótipo do objeto criado novoUser
console.log('1 - Criando Objetos com construtor')
const novoUser = new User('Juliana', 'j@j.com'); //cria novo objeto e atribui o contexto de this para o novoUser
console.log(novoUser.exibirInfos())
console.log('\n ////////////////////////////////// \n');

//2- Criando Objetos com Object.create

console.log('2 - Criando Objetos com Object.create')
function Admin(role) {
    User.call(this,'Juliana','j@j.com');
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype);
const novoUser2 = new Admin('Admin');
console.log(novoUser2.exibirInfos());
console.log(novoUser2.role)

console.log('\n ////////////////////////////////// \n');


//3 - Criando objeto diretamente - não tem construtor
const user3 = {
    init: function(nome,email){ //funcao init substitui o construtor
        this.nome = nome,
        this.email = email
    },
    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser3 = Object.create(user3); //user3 é proptotipo de novoUser3
novoUser3.init('Eus[ebio', 'e@e.com');
console.log(novoUser3.exibirInfos('Eusébio'));
console.log(user3.isPrototypeOf(novoUser3));