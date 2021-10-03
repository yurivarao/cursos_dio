// Função normal
function soma(a, b){
    return a + b; 
}
console.log(soma(5, 5));

// Função por variável
var soma1 = function(a, b) {
    return a + b;
}
console.log(soma1(2, 2));

// Arrow Function
var soma2 = (a, b) => a + b;

// Arrow Funtion com declarações e blocos
var soma3 = (a, b) => {
    var x = 10;
    if (a > b){
        return a + b;
    } else {
        return x;
    }
}
console.log(soma3(10, 5));

// Apenas um argumento não necessitam de parentesis
var soma4 = a => a;

// Retorno de objeto implicito
var createObj = () => ({ test:123 });

// O hosting não funciona
// Não serve como função construtora;

var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log("after 1000ms");
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

// Default Function Arguments
function multiply(a, b=1){
    return a * b;
}

// Recebe outro parâmetro como valor padrão
function multiply1(a, b=a){
    return a * b;
}

// Lazy Evaluation - Recebe outra função como valor padrão
function randomNumber() {
    console.log("Generating a random number...");
    return Math.random() * 10;
}
function multiply2(a, b=randomNumber()){
    return a * b;
}

console.log(multiply(2, 4));
console.log(multiply(2));
console.log(multiply1(3));
console.log(multiply2(3));

// Enhanced Object Literals
function method1() {
    console.log("method called");
}
var obj = {
    method1
};
obj.method1();

// Método alternativo
var obj = {
    // Declaração da função normal
    soma: function soma(a, b) {
        return a + b;
    },
    // Declaração reduzida
    subtracao(a, b){
        return a - b;
    }
};
console.log(obj.soma(5, 10));
console.log(obj.subtracao(10, 5));

// Declaração de propriedades de um objeto
var propName = "teste";
var obj = {
    [propName + "concat"]: "prop value" 
};
console.log(obj);