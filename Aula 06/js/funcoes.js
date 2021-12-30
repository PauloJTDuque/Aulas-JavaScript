
function pares(valores){
    let lista=[];
    for(let i=0; i<valores.length; i++){
        if(valores[i] % 2 === 0){
            lista.push(valores[i]);
        }
    }
    return lista;
}

//Funcao anonima. Vinculada a alguma coisa: pode ser um botao, elemento HTML (relacionado a um evento), 
// uma variável ou constante

const anos = function(){
    let qtd = 0;
    let anosBissextos = [];

    for(let i=1950; i<2021; i++){
        if(i%4===0){
            anosBissextos.push(i);
            qtd++;
        }
    }
    //console.log(qtd);
    //console.log(anosBissextos);
    //return `${qtd} ${anosBissextos}`; //Retorna como texto
    return [qtd,anosBissextos];
}

const texto = (t) => {
    return t.length;
}