//Variáveis globais
let PratoSelecionado = false;
let BebidaSelecionada = false;
let SobremesaSelecionada = false;

function selecionaOpcao(elementoClicado, classePrato){

    let divDesejada = document.querySelector(`${classePrato}`);
    let selecionadoAnterior = divDesejada.querySelector(".selecionado");
    let adicionaCheck = elementoClicado.querySelector("img:last-child");

    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove("selecionado");
        removeCheck(selecionadoAnterior);
    }

    elementoClicado.classList.add("selecionado");
    adicionaCheck.classList.remove("escondido");

    if(classePrato === ".prato-principal"){
        PratoSelecionado = elementoClicado;
    }else if(classePrato === ".bebida"){
        BebidaSelecionada = elementoClicado;
    }else if(classePrato === ".sobremesa"){
        SobremesaSelecionada = elementoClicado;
    }

    if(PratoSelecionado && BebidaSelecionada && SobremesaSelecionada){
        mudarBotao();
    }
}

function removeCheck(selecionadoAnterior){

    let checkVerde = selecionadoAnterior.querySelector("img:last-child");
    
    if(selecionadoAnterior !== null){
        checkVerde.classList.add("escondido");
    }    
}

function mudarBotao(){

    let esconderBotao = document.querySelector(".botao-selecione3");
    let mostrarBotao = document.querySelector(".botao-fechar-pedido");
    esconderBotao.classList.add("escondido");
    mostrarBotao.classList.remove("escondido");
}

function fecharPedido(){   
    
    let modal = document.querySelector(".modalFecharPedido");
    let fundo = document.querySelector(".fundo-transparente")
    let prato = document.querySelector(".pratoFinal");
    let bebida = document.querySelector(".bebidaFinal");
    let sobremesa = document.querySelector(".sobremesaFinal");
    let total = document.querySelector(".valorTotal");
    
    prato.querySelector("p:first-child").innerHTML = `${PratoSelecionado.querySelector("h1").innerHTML}`
    prato.querySelector("p:last-child").innerHTML = `${retornaSemR$(PratoSelecionado)}`
    bebida.querySelector("p:first-child").innerHTML = `${BebidaSelecionada.querySelector("h1").innerHTML}`
    bebida.querySelector("p:last-child").innerHTML = `${retornaSemR$(BebidaSelecionada)}`
    sobremesa.querySelector("p:first-child").innerHTML = `${SobremesaSelecionada.querySelector("h1").innerHTML}`
    sobremesa.querySelector("p:last-child").innerHTML = `${retornaSemR$(SobremesaSelecionada)}`

    total.querySelector("p:last-child").innerHTML = `${somaDosValores(retornaSemR$(PratoSelecionado), retornaSemR$(BebidaSelecionada), retornaSemR$(SobremesaSelecionada))}`;

    modal.classList.remove("escondido");
    fundo.classList.remove("escondido")
}

function cancelaPedido(){

    let modal = document.querySelector(".modalFecharPedido");
    let fundo = document.querySelector(".fundo-transparente")

    modal.classList.add("escondido");
    fundo.classList.add("escondido")
}

function somaDosValores(valorPrato, valorBebida, valorSobremesa){

    valorPrato = retornaComPonto(valorPrato);
    valorBebida = retornaComPonto(valorBebida);
    valorSobremesa = retornaComPonto(valorSobremesa);

    let valorFinal = (Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa));
    valorFinal = valorFinal.toFixed(2);
    valorFinal = valorFinal.toString();
    valorFinal = retornaComVirgula(valorFinal);
    valorFinal = `R$ ${valorFinal}`;

    return valorFinal;
}

function retornaSemR$(elementoSelecionado){
    let stringCompleta = elementoSelecionado.querySelector("h3").innerHTML;
    let stringCortada = stringCompleta.slice(3);

    return stringCortada;
}

function retornaComPonto(elementoComVirgula){
    elementoComVirgula = elementoComVirgula.replace("," , ".");
    return elementoComVirgula;
}

function retornaComVirgula(elementoComPonto){
    elementoComPonto = elementoComPonto.replace("." , ",");
    return elementoComPonto;
}