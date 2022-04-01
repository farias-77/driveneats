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
        fecharPedido();
    }
}

function removeCheck(selecionadoAnterior){

    let checkVerde = selecionadoAnterior.querySelector("img:last-child");
    
    if(selecionadoAnterior !== null){
        checkVerde.classList.add("escondido");
    }    
}

function fecharPedido(){

    let esconderBotao = document.querySelector(".botao-selecione3");
    let mostrarBotao = document.querySelector(".botao-fechar-pedido");
    esconderBotao.classList.add("escondido");
    mostrarBotao.classList.remove("escondido");
}

