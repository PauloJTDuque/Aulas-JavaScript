



document.getElementById("abrir").onclick = () =>{
    document.getElementById("menu").style.left="0px";
    // document.getElementById("conteudo").style.marginLeft="200px";
}

document.getElementById("fechar").onclick = () =>{
    document.getElementById("menu").style.left="-200px";
    // document.getElementById("conteudo").style.marginLeft="0px";
}

document.getElementById("abrirmodal").onclick = () =>{
    document.getElementById("fundomodal").style.width="100vw";
    document.getElementById("fundomodal").style.height="100vw";
    document.getElementById("fundomodal").style.opacity="1";
}
document.getElementById("fecharmodal").onclick = () =>{
    document.getElementById("fundomodal").style.top="-2000vw";
    // document.getElementById("fundomodal").style.height="0vw";
    // document.getElementById("fundomodal").style.opacity="0";
}