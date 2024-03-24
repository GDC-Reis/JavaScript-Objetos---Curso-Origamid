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
        return this.lados * lado;
    },
}
quadrado.lados;
quadrado.area(10);

console.log(Math.PI);
console.log((parseInt(Math.random() * 10)));

let pi = Math.PI;
console.log(pi);

console.table(quadrado);