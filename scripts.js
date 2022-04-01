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
        PratoSelecionado = true;
    }else if(classePrato === ".bebida"){
        BebidaSelecionada = true;
    }else if(classePrato === ".sobremesa"){
        SobremesaSelecionada = true;
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

    modal.classList.remove("escondido");
    fundo.classList.remove("escondido")
}

function cancelaPedido(){

    let modal = document.querySelector(".modalFecharPedido");
    let fundo = document.querySelector(".fundo-transparente")

    modal.classList.add("escondido");
    fundo.classList.add("escondido")
}
