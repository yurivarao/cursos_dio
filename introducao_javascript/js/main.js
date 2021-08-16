/*
//Variáveis e Prints
var nome = "Yuri Varão";
var idade = 24;
var frase = "Primeira aplicação com Typescript";

alert("Seja Bem Vindo " + nome);
console.log(frase.replace("Typescript", "Javascript"));
console.log(frase.toLowerCase());

//Listas
var lista = ["maçã", "pêra", "laranja"];
console.log(lista.push("uva"));
console.log(lista.pop());
console.log(lista.reverse());
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" - "));

//Dicionário
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);

// If e Else
var idade = prompt("Qual a sua idade: ");
if (idade >= 18){
    alert("Maior de Idade!");
} else {
    alert("Menor de Idade!");
};

//While
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}

//For
for(i = 0; i <=5; i++){
    console.log(i);
}

//Datas
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
alert(date);
alert("Data atual: " + day + "/" + month + "/" + year);


//Funções
function somar(n1, n2){
    return n1 + n2;
}

function validarIdade(idade) {
    if(idade >= 18) {
        return true
    } else {
        return false
    }
}

var idade = prompt("Qual a sua idade: ");
console.log(validarIdade(idade));
*/

//Eventos
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>";    
}

function redirecionar() {
    window.open("https://github.com/yurivarao/web_projects");
    //window.location.href = "https://github.com/yurivarao/web_projects";
}

function trocar(elemento) {
    //documento.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    //documento.getElementById("mousemove2").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

function load() {
    alert("Página carregada com sucesso")
}
