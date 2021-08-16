// Rest Operator
// Caso 1
function soma(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(soma(2, 2, 2, 5, 5, 5));

// Caso 2
const soma = (a, b, ...rest) => {
    console.log(a, b, rest);
}
console.log(soma(2, 2, 2, 5, 5, 5));

// Caso 3
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const soma = (...rest) => {
    return multiply(...rest);
}
console.log(soma(2, 2, 2, 5, 5, 5));

// Spread Operator
// Utilizado com string, arrays, e literal objects

// Strings
const str = "Digital Innovation One";

function logArgs(...args) {
    console.log(args);
}
logArgs(...str)

// Arrays
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
const arr2 = [5, 6, 7, ...arr];
console.log(arr2);

// Literal Objects
const obj = {
    teste: 123
};
const obj2 = {
    teste: 456,
    ...obj
};
console.log(obj2);

// Destructuring Assignment
// Arrays
var [apple, orange, banana] = ["apple", "orange", "banana"];

// Objects
var objeto = {
    name: "Celso"
}

var name = objeto.name;

var { nome } = objeto;
console.log(nome);