// *** IMPORTANTE ***
// Objeto também tem acesso á variaveis declaradas fora dele

let pessoa = {
    nome: "Gustavo",
    idade: 23,   
}

// Métodos -> É uma propriedade que possui uma função no local do seu valor.
let quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado; //this sempre faz referencia ao próprio objeto
    },
}
quadrado.lados;
quadrado.area(10);

console.log(Math.PI);
console.log((parseInt(Math.random() * 10)));

let pi = Math.PI;
console.log(pi);

// console.table(quadrado);

let menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight(){
        return this.height / 2;
    }
}

//Adicionando novo valor a propriedade já existente
menu.backgroundColor = '#000';

//Adicionando nova propriedade
menu.color = 'blue';
menu.esconder = function (){
    console.log('Escondi');
}

var bg = menu.backgroundColor;

//Exercicios

//Crie um objeto com os seus dados pessoais
//Deve possior pelo menos duas propriedades nome e sobrenome
let person = {
    nome: 'Gustavo',
    sobrenome: 'Donisete',
}

//Crie um método no objeto anterior, que mostre seu nome completo
person.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
}

//Modifique o valor da propriedade preco para 3000
let carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver um homem.
let cachorro = {
    raca: 'Labrador',
    idade: 10,
    cor: 'Preto',
    latir(pessoa){
        if(pessoa === 'homem' || pessoa === 'Homem'){
            return 'Latir';
        }else{
            return 'Nada';
        }
    }
}