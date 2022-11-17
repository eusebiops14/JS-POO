const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2021/01/01',
    role: 'admin',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

//exemplo1
console.log('Exemplo 1 - retorna valores esperados:');
user.exibirInfos(); //aqui retorna os valores esperados pois está dentro do contexto correto
console.log('\n ////////////////////////////////// \n');

//exemplo2
console.log('Exemplo 2 - Não retorna valores experados - perda de contexto:');
const exibir = user.exibirInfos; // ao atribuir uma função a uma constante/varaivel no JS, essa função perde seu contexto e deixa de retornar os valores corretos
exibir(); // linhas 19 e 20 -> ao executar , retorna undefined
console.log('\n ////////////////////////////////// \n');

//exemplo3
console.log('Exemplo 3 - Usamos this mas dentro de um contexto errado ')
const exibir2 = function(){
    console.log(this.nome, this.email); //igual linha 8
}
exibir2()
console.log('\n ////////////////////////////////// \n');

//exemplo4
console.log('Exemplo 4 - Retorna Objeto global:')
const exibir3 = function() {
    console.log(this);
}
exibir3() 
console.log('\n ////////////////////////////////// \n');

//exemplo5
console.log('Exemplo 5 - Usando método .bind para atrelar uma variavel a um contexto:')
const exibirNome = exibir2.bind(user); //associa a funcão exibir2 ao contexto do objeto User permitindo que ela retorne os valores corretos
exibirNome();
console.log('\n ////////////////////////////////// \n');


const admin = {
    nome: 'Mariana',
    email: 'mariana@gmail.com',
    role: 'admin',
    criarCurso() {
        console.log('Curso criado com sucesso ! ');
    }

}

Object.setPrototypeOf(admin,user); //user é um protótipo do objeto admin
admin.criarCurso();
admin.exibirInfos();