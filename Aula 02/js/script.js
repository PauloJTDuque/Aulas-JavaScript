/*
O comando abaixo será executado qdo o usuário abrir a página.
Será exibida uma janela (prompt) pedindo uma cor.
De acor com a cor selecionada, o fundo da página muda.
Para essa execução, estamos usando o comando window (janela navegador).document(meudocument html).body(corpo da página. addEventListener(
    adicionando um evento ao body para que ele preste atenção ao carregamento da página (load) e assim executar a 
    função ()=>{} com todo o código do desvio de fluxo if...elseif...else    ))
*/

window.document.body.onload = ()=>{
    let v_escolha = prompt("Digite:\n1->Amarelo\n2->Vermelho\n3->Azul") 
    if (v_escolha == 1)
        window.document.body.style.backgroundColor="yellow";
    else if(v_escolha==2)  
        window.document.body.style.backgroundColor="red";  
    else if(v_escolha==3)
        window.document.body.style.backgroundColor="blue"; 
    else
        window.alert("Numero Inexistente");        
};