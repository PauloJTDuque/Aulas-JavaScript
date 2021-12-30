function mensagem(){
    console.log("Minha função");
}

function mensagem2(){
    return "Minha função 2";
}

function executar(){
    alert(mensagem2());
    alert(mensagem());
}

function  soma(n1,n2){
    return n1+n2;
}

function total(numeros){
    let rs = 0
    for (i=0 ; i<numeros.lenght; i++){
        rs += numeros[i];
    }

    let p = document.createElement("p");
    p.innerHTML = rs;
    document.body.appendChild(p);

}

const n = [10,2,3,5];
n.push(20);
console.log(n);

//construir funcoes anonimas
document.getElementById("btn").onclick = function(){
    alert("O resultado da soma é :"+soma(10,20));
    alert(`O resultado soma é ${soma(10,20)}`);
    alert(`Hoje é ${new Date().toDateString()} .Fizemos uma soma: #{soma(10,20)}`);

}

//let n = [10,2,3,5];
//n = "Oi";
//document.body.addEventListener("load",total(n));