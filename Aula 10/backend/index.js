// Vamos importar o módulo do servidor express parta gerenciamento do servidor
const express = require("express");

// Importacao da interface de comunicação entre o servidor criado em node com o banco de dados mongodb.
//Esse modulo nos ajuda a cadastrar, consultar, atualizar, deletar os dados no servidor, Importa do mongoose
const mongoose = require ("mongoose");

// Para creiptografar a senhas do usuário no bdados, vamos usar o bcrypt
const bcrypt = require("bcrypt");

// Para tratar com os protocolos diferentes, tais como http, https e outros, utilizaremos o cors
const cors = require("cors");

// vamos construir uma instancia do servidor
const app = express();

//configurar o servidor para trabalhar com json
app.use(express.json());

//configurar o servidor para usar o trato com protocolos diferentes
app.use(cors());

// Realizar configuração do BD:
//definir a URL de comunicação com o servidor mongodb
const url = "mongodb+srv://pauloduque:Jose704570@dbduque.paaox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// estabelecer a conexao com BD usando o mongose
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

//construindo a estrutura da tabela de clientes
const campos = mongoose.Schema({
    nome:String,
    email:{type:String,unique:true},
    telefone:String,
    usuario:{type:String, unique:true},
    senha:String,
    datacadastro:{type:Date,default:Date.now}
});

//definir que a senha será criptografada um passo antes do salvamento dos dados do cliente
campos.pre("save", function(next){
    let cliente = this
    if(!cliente.isModified("senha")) return next();
    bcrypt.hash(cliente.senha,10,((erro,rs)=>{
        cliente.senha = rs
        return next();
    }));
})
//comando para a criação efetiva do BD
const Cliente = mongoose.model("tbcliente",campos);

//Construção das rotas para realizar o cadastro,seleção, atualização e deleção dos dados no banco
app.get("/api/cliente/listar",(req,res)=>{
    //todas as vezs esta rota for chamada, retornaremos todos os clientes cadastrados
    Cliente.find((erro,result)=>{
        if(erro){
            return res.status(503).send({rs:`Erro interno: ${erro}`})
        }
        res.status(200).send({rs:result});
    });
})

app.post("/api/cliente/cadastro",(req,res)=>{
    const dados = new Cliente(req.body);
    dados.save().then((result)=>{
        res.status(201).send({rs:`Cliente Cadastrado`,payload:result})  //201 criado
    }).catch((erro)=>res.status(503).send({rs:`Erro ao Cadastrar: ${erro}`}));
})
app.listen(3000,()=>console.log("Servidor on-line na porta 3000"))