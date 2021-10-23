function while1(){
    var i = 1;

    while (i <= 10){
        console.log(i);
        i++;
    }
}

function while2(){

    var entrada = prompt("Digite uma letra");

    while (entrada != "s"){
        alert("Olá");
        entrada = prompt("Digite uma letra");
    }
}

function while3(){

    var operacao = prompt("Digite: \n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\n9-Sair");

    if(operacao<1 || operacao>9){
        alert("Esta Operação não existe");
    }

    if(operacao>4 && operacao > 9){
        alert("Esta Operação não existe");    
    }

    while(operacao != "9"){

        var numero1 = prompt("Digite um número");
        var numero2 = prompt("Digite outro número");

        switch(operacao){
            case "1":
                alert(parseInt(numero1)+parseInt(numero2));
                break;
            case "2":
                alert(numero1-numero2);
                break;
            case "3":
                alert(numero1*numero2);
                break;
            case "4":
                alert(numero1/numero2);
                break;
            default:
                alert("Operação Inválida");

        }
        operacao = prompt("Digite: \n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\n9-Sair");
    }
}