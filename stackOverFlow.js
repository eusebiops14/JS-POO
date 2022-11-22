//ver: https://cursos.alura.com.br/course/javascript-passos-programacao-orientada-objetos/task/103433

class User2 {
    #nome
    #email
    #cpf
     constructor(nome, email, cpf) {
      this.#nome = nome
      this.#email = email
      this.#cpf = cpf
    }
   
    get nome() {
      return this.nome //deveria ser this.#nome aqui para não dar erro
    }
   }

const novoUser = new User2('Carol', 'c@c.com', '12312312312')
console.log(novoUser.nome)

/* Você notou que o get retorna não a propriedade #nome, mas sim nome.
Embora sejam consideradas como variáveis diferentes pelo JavaScript,
esse código irá resultar em um stack overflow, pois a propriedade 
nome sendo chamada dentro do getter get nome() (ambas com a mesma 
nomenclatura) faz com que o getter seja chamado dentro dele mesmo,
de forma recursiva, causando o “estouro” na pilha de processos do 
NodeJS.*/