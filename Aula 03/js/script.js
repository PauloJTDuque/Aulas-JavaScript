
// var cor = prompt("Digite:\n1->Vermelho\n2->Azul\n3->Preto") 
// if (cor == 1){
//     document.body.style.backgroundColor="red";
// }
// else if(cor==2){  
//     document.body.style.backgroundColor="blue"; 
// }     
// else if(cor==3){
//     document.body.style.backgroundColor="black";
// }     
// else{
//     document.body.style.backgroundColor="white";
//     alert("O valor digitado não corresponde");
// }    

//DRY = Don't Repeat Yourself (não seja repetitivo)


//Melhorando o código

var fundo = "white";

var cor = prompt("Digite:\n1->Vermelho\n2->Azul\n3->Preto")

if (cor == 1){
    fundo = "red";
}
else if(cor==2){
    fundo = "blue";
}    
else if(cor==3){
    fundo = "blue";
}    
else{
    alert("O valor digitado não corresponde");
} 
document.body.style.backgroundColor=fundo;   