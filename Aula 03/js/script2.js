
var cor = prompt("Digite uma cor:\n Vermelho,Verde,Azul,Amarelo,Preto,Cinza");
var fundo="";

/* Transformar em 
toLowerCase() = minúsculo ou 
toUpperCase() = maiúsculas
*/
cor = cor.toLocaleLowerCase();

switch(cor){
    case"vermelho":
        fundo="red";
        break;
    case"verde":
        fundo="green";
        break; 
    case"azul":
        fundo="blue";
        break;   
    case"amarelo":
        fundo="yellow";
        break;
    case"preto":
        fundo="black";
        break; 
    case"cinza":
        fundo="gray";
        break;  
    default:
        fundo="white";
        break; 
}
document.body.style.backgroundColor=fundo; 