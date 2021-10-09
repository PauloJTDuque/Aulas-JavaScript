//console.log("Texto em JavaScript Externo");
// O comando abaixo diz que o documento HTML deve obter o TAG h1 e
// mudar o seu Texo

// document.getElementsByTagName("h1")[0].innerHTML="Mudei o Texto"

// v_nome = prompt("Digite o seu nome");
//console.log(v_nome);
// document.getElementsByTagName("h1")[0].innerHTML=v_nome;

/*
var é utilizado para declarações de variáveis globais. É vista em todo o código
let é utilizado para declarações de forma de bloco. Só será vista dentro do bloco.
Se usar let ou var fora de blocos, serão vistas por todo o código.

var v_idade = 10;
let v_email = "joao@terra.com.br";

if (10==10){
    var v_nome = "Pedro";
    let v_sobrenome = "Oliveira";
}
console.log(v_nome);
console.log(v_sobrenome);
*/

// document.getElementById("saida").innerHTML="Mensagem";
// document.getElementById("saida").style.backgroundColor="yellow";
// document.getElementById("saida").style.color="red";

// DRY - Dont repeat yourself - Mudamos para:

// var v_tag = document.getElementById("saida"); Ideal é usar uma constante
const v_tag = document.getElementById("saida");

v_tag.innerHTML = "Novo Texto";
v_tag.style.backgroundColor = "green";
v_tag.style.color = "yellow";