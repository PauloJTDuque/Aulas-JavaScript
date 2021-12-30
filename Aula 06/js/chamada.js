const numeros = [10,3,50,21,6,1];

console.log(pares(numeros));

// Criar um botao e 2 Divs

const btn = document.createElement("button");

//adicionando ID no botao

btn.setAttribute("id","btn");
btn.innerText="Clique";

// criar as divs para qtde anos e anos bissextos

const divQtd = document.createElement("div");
divQtd.setAttribute("id","qtd");

const divAno = document.createElement("div");
divQtd.setAttribute("id","ano");

// Adicionar elementos criados ao body

document.body.appendChild(btn);
document.body.appendChild(divQtd);
document.body.appendChild(divAno);

// Adicionando um evento de click ao botao btn
// esse evento chama a constante "ano" associada a uma função

btn.addEventListener("click",anos());


btn.onclick=function(){
//alert("chamada");
    const a = anos();

    divQtd.innerHTML=a[0];

    for(let i=0; i<a[0]; i++){
        divAno.innerHTML+=`${a[1][i]} <br>`;
    }


    /*divQtd.innerHTML=anos()[0];
    for(let i=0; i<anos()[1].length; i++){
        divAno.innerHTML+=anos()[1][i];
    }*/
}

const btn2 = document.createElement("button");
const divTexto = document.createElement("div");

btn2.innerHTML="Contar";
divTexto.setAttribute("class","formato");

//adicionando ao body
document.body.appendChild(btn2);
document.body.appendChild(divTexto);

//btn2.onclick = function(){//abaixo, outra maneira usando arrow function
btn2.onclick = ()=>{
    divTexto.innerHTML=texto("Olá, hoje é sábado.");
}