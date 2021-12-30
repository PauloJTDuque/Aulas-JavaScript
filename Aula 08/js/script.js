// var cidades = ["São Paulo","Curitiba","Campinas"]

// Diversas maneiras

// for (let i=0; i<cidades.length; i++){
//     console.log(cidades[i]);
// }

// cidades.forEach(function(dado,ix)){
//     console.log(`dentro Do ForEach ${valor} e ${index}`)
// }

// cidades.forEach((valor,index)=>{
//     console.log(`dentro Do ForEach Arrow ${valor} e ${index}`)
// });

// cidades.map((dados)=>{
//     console.log(`map da cidade ${dados}`)
// });

// var produto1 = {
//     nome:"Teclado",
//     descricao:"Sem Fio",
//     preco:50.90,
//     quantidade:30
// };
// var produto2 = {
//     nome:"Mouse",
//     descricao:"Sem Fio",
//     preco:30.50,
//     quantidade:10
// };
// var produto3 = {
//     nome:"Monitor",
//     descricao:"Monitor Dell",
//     preco:500.90,
//     quantidade:5
// };

// var lista = [produto1,produto2,produto3]

// var lstProduto = [
//     {
//         nome:"Teclado",
//         descricao:"Sem Fio",
//         preco:50.90,
//         quantidade:30,
//         fornecedores:[
//             "Microsoft",
//             "Multilaser"
//         ]
//     },
//     {
//         nome:"Mouse",
//         descricao:"Sem Fio",
//         preco:30.50,
//         quantidade:10,
//         fornecedores:[
//             "Microsoft",
//             "Multilaser"
//         ]
//     },
//     {
//         nome:"Monitor",
//         descricao:"Monitor Dell",
//         preco:500.90,
//         quantidade:5,
//         fornecedores:[
//             "Dell"
//         ]
//     }
// ]

// lstProduto.map((item)=>{
//     item.fornecedores.map((fr)=>{
//         console.log(`Empres`)
//     })
// })

/*
Para obter os dados relacionados aos filmes que vem da API Themoviedb, utilizaremos uma URL com o caminho dos dados.
Para isso, usaremos uma função Especial JavaScript classificada como Promise, ou seja, uma promessa de que ela irá 
conseguirbuscar os dados. Pode falhar, temos que tratar a falha.
*/

fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1")
.then((response)=>response.json())
.then((listaFilmes)=>{



// Fazer referencia ao body

const body = window.document.body;
const container = window.document.createElement("div");
const header = window.document.createElement("header");
const main = window.document.createElement("main");
const h1 = window.document.createElement("h1");


container.setAttribute("id","container");
header.setAttribute("id","header");

h1.innerHTML="Filmes";
header.appendChild(h1);
header.innerHTML+=`Pagina Atual: ${listaFilmes.page}
                  - Total de Páginas: ${listaFilmes.total_pages}
                  - Total de Resultados: ${listaFilmes.total_results}`; // palistaFilmes.page+listaFilmes.total_pages

main.setAttribute("id","main");

listaFilmes.results.map((dado)=>{
    var item = window.document.createElement("div");
    var img = window.document.createElement("img");
    var h2 = window.document.createElement("h2");
    var pR = window.document.createElement("p");
    var pV = window.document.createElement("p");

        h2.innerHTML=dado.title;
        
        pR.setAttribute("class","lancamento");
        pR.innerHTML = `Lancamento : ${dado.release_date}`;

        pV.setAttribute("class","media");
        pV.innerHTML = `Media: ${dado.vote_average}`;

        img.src=`https://image.tmdb.org/t/p/w500/${dado.poster_path}`;
        item.appendChild(img);
        item.appendChild(h2);
        item.appendChild(pR);
        item.appendChild(pV);
        main.appendChild(item);
})

container.appendChild(header);
container.appendChild(main);
body.appendChild(container);

})
.catch((erro)=>console.error(`Erro ao tentar carregar a API ${erro}`));

