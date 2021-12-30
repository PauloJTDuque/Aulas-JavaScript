const btn = document.getElementById("btn")

btn.onclick = ()=>{
    const txtnome = document.getElementById("txtnome").value;
    const txtemail = document.getElementById("txtemail").value;
    const txttelefone = document.getElementById("txttelefone").value;
    const txtusuario = document.getElementById("txtusuario").value;
    const txtsenha = document.getElementById("txtsenha").value;
}

fetch("http://localhost:3000/api/cliente/cadastro",{
    method:"POST",
    headers:{
        accept:"application/json",
        "content-type":"application/json"
    },
    body:JSON.stringify({
        nome:txtnome,
        email:txtemail,
        telefone:txttelefone,
        senha:txtsenha
    })
})
.then ((response)=>response.json())
.then ((dados)=>{
    alert(rs)

document.getElementById("txtnome").value = "";
document.getElementById("txtemail").value = "";
document.getElementById("txttelefone").value = "";
document.getElementById("txtusuario").value = "";
document.getElementById("txtsenha").value = "";

})
.catch((erro)=>console.error(`Erro ao tentar cadastrar: ${erro}`));
