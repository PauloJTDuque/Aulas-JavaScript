function calculoCPF(){
    
    var cpf = prompt("Digite o seu CPF");

    /*
    A variavel cpf9 armazena os 9 ptimeiros digitos do CPF
    var cpf9 = cpf.substring(0,9);
    Passamos para função substring 2 parâmetros: posição inicial e posição final/quant?.
    */

   var cpf9 = cpf.substring(0,9);
   
   console.log(cpf9);

   var peso10 = 10;
   var peso11 = 11;

   var resultado = 0;
   var resto = 0;
 

   // console.log(cpf9[0]);

   for (var i =0; i < 9; i++){
        resultado += cpf9[i] * peso10;
        peso10--;                                //peso = peso - 1; 
   }
   resto = (resultado % 11); 
   if (resto < 2){
        cpf9+='0'    // poderia ser 0
   }     
   else{
        cpf9+=(11-resto);
   }  
   console.log(resto);
   
   resultado = 0;
   resto = 0;

   for (var i =0; i < 10; i++){
        resultado += cpf9[i] * peso11;
        peso11--;                                //peso = peso - 1;
   }
   resto = (resultado % 11); 
   if (resto < 2){
        cpf9+='0'    // poderia ser 0
   }     
   else{
        cpf9+=(11-resto);
   }
   
   if (cpf != cpf9){
       alert('CPF Inválido');
   }
   else{
       alert('CPF Válido')
   } 
}
