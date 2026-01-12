$(document).ready(function(){


function validarCampo(campo){
let valor = campo.val();


if(valor === ""){
alert("Campo vazio!");
campo.focus();
return false;
}


if(isNaN(valor)){
alert("Digite apenas números!");
campo.focus();
return false;
}


if(valor <= 0){
alert("Digite valores maiores que zero!");
campo.focus();
return false;
}


return true;
}


$("#preco").blur(function(){ validarCampo($(this)); });
$("#quantidade").blur(function(){ validarCampo($(this)); });


$("#processar").click(function(){
if(!validarCampo($("#preco")) || !validarCampo($("#quantidade"))) return;


let produto = $("#produto").val();
let preco = parseFloat($("#preco").val());
let qtd = parseInt($("#quantidade").val());


let custoReal = preco * qtd;
let iva = custoReal * 0.16;
let custoVenda = custoReal + iva;


let linha = "<tr>" +
"<td>"+produto+"</td>" +
"<td>"+preco+"</td>" +
"<td>"+qtd+"</td>" +
"<td>"+custoReal.toFixed(2)+"</td>" +
"<td>"+iva.toFixed(2)+"</td>" +
"<td>"+custoVenda.toFixed(2)+"</td>" +
"</tr>";


$("#tabela").append(linha);
});
});