
let x=1;
function movimenta(){
        
    document.getElementById("caixa1").style.marginLeft=`${x}px`;
    x+=5;
}

document.getElementById("caixa1").onclick=()=>{
    document.getElementById("caixa1").style.backgroundColor="blue";
    document.getElementById("caixa1").style.width="blue";
    document.getElementById("caixa1").style.backgroundColor="blue";

}

window.setInterval(movimenta,500);

