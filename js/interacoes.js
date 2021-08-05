


// menu principal abrir/fechar
var teste = document.getElementById('calculoDaArmlong');
var checar = document.getElementById('ArmLong');

var telaFlechaI = document.getElementById('calculoDaFlechaImediata');
var checkFlechaI = document.getElementById('arrowIme');



var telaflechaD = document.getElementById('calculoDaFlechaDiferida');
var checkFlechaD = document.getElementById("arrowDif");

var telaArmTranversal = document.getElementById("calculoDaArmTrans");
var checkArmTranversal = document.getElementById("ArmTrans");

var telaDenteGerber =  document.getElementById("calculoDenteGerber");
var checkDenteGerber = document.getElementById("denteGerber")

// Condicionais de check boxes


// Armadura longitudinal
var condicionalMomCalc = document.getElementById('condmomentocalc');
var divMomCalc = document.getElementById('momentoDeCalcInput');

var condicionalMomAtuante = document.getElementById('condmomentoatuan');
var divMomAtua = document.getElementById('momAtuante');

// Armadura Transversal

var condicaoCalc1 = document.getElementById("condModeloCalculo1");
var condicaoCalc2 = document.getElementById("condModeloCalculo2");

var divCalculo1 = document.getElementById("condicaocalc1");
var divCalculo2 = document.getElementById("condicaocalc2");

// Flecha imediata condicoes
var armDuplaImediataCheck = document.getElementById('armDuplaImediata')
var campoArmDuplaImediataCheck = document.getElementById('compresao')
var armSimplesImediataCheck = document.getElementById('armSimplesImediata')
// 
var divMArcacao = document.getElementsByClassName("alinamentoInputs");

function limparChecksNavBar(indice){
    const listaTlea = [teste, telaFlechaI,telaflechaD, telaArmTranversal, telaDenteGerber ];
    const listaCheck = [checar, checkFlechaI, checkFlechaD, checkArmTranversal, checkDenteGerber]


    for(let i =0; i<listaTlea.length; i++){
        listaTlea[i].style.display = 'none'
        divMArcacao[i].style.backgroundColor = "#0055b8"
        if (i!= indice){
            listaCheck[i].checked = false
        }
    }
    

}

function mostrarCampo (check, tela, indice){
    if(check.checked){
        limparChecksNavBar(indice)
        tela.style.display = 'flex';
        divMArcacao[indice].style.backgroundColor = "#004594"

    }else {
        tela.style.display = "none";
        check.checked = false
        divMArcacao[indice].style.backgroundColor = "#0055b8"
    }
}


function mostrarValor() {
    
    if (checar.checked){
        teste.style.display = "flex"
        
        divMArcacao.style.backgroundColor = "#004594"
        
        
    }else {
        teste.style.display = "none"
        divMArcacao.style.backgroundColor = "#0055B8"
    }
}

function mostrarMomentoCalculoeAtuante(condicional1,caixa1, condicional2, caixa2){
    /* 
        Função mostra inputs de moment atuante ou calculo
        da função armadura longitudinal.
    */
    if(condicional1.checked){
        caixa1.style.display = "flex";
        condicional2.checked =false;
        caixa2.style.display = "none";
    }else {
        caixa1.style.display = "none";
    }
}

function mostrarMomentoAtuante(){
    
    if(condicionalMomAtuante.checked){
        divMomAtua.style.display = "flex"
        condicionalMomCalc.checked = false
        divMomCalc.style.display = "none"
    }else {
        divMomAtua.style.display = "none"
    }
}

var tresCampos = document.getElementById("tresInputs")
var armSimples = document.getElementById("armSimples")
var armDupla = document.getElementById("armDupla")

function armSimplesf(campo, arm1, arm2){
    if(arm1.checked){
        campo.style.display = "none"
        arm2.checked = false
    }
}


function armDuplaf(campo, arm1, arm2){
    if(arm1.checked){
        campo.style.display = "flex"
        arm2.checked = false
    }else{
        campo.style.display = "none"
    }
}


var btn = document.getElementById('calculaDimen');
function main(){
    checar.onclick = function (){
        mostrarCampo(checar, teste, 0);

    }
    
    condicionalMomCalc.onclick = function (){
        mostrarMomentoCalculoeAtuante(condicionalMomCalc,
             divMomCalc, 
             condicionalMomAtuante,
             divMomAtua)
    }

    condicionalMomAtuante.onclick = function (){
        
        mostrarMomentoCalculoeAtuante(
            condicionalMomAtuante,
            divMomAtua, 
            condicionalMomCalc,
            divMomCalc)
    }


    checkFlechaI.onclick = function (){
        mostrarCampo(checkFlechaI, telaFlechaI, 1);
    }

    checkFlechaD.onclick =function(){
        mostrarCampo(checkFlechaD, telaflechaD, 2)
    }


    checkArmTranversal.onclick = function(){
        mostrarCampo(checkArmTranversal, telaArmTranversal, 3)
    }

    
    condicaoCalc1.onclick = function(){
        mostrarMomentoCalculoeAtuante(
            condicaoCalc1, 
            divCalculo1,
            condicaoCalc2,
            divCalculo2

        )
    }

    condicaoCalc2.onclick = function(){
        mostrarMomentoCalculoeAtuante(
            condicaoCalc2, 
            divCalculo2,
            condicaoCalc1,
            divCalculo1

        )
    }



    armSimples.onclick = function(){
        armSimplesf(tresCampos, armSimples, armDupla)
    }

    armDupla.onclick = function(){
        armDuplaf(tresCampos, armDupla, armSimples)
    }


    checkDenteGerber.onclick = function(){
        
        mostrarCampo(checkDenteGerber, telaDenteGerber, 4)
    }

    armDuplaImediataCheck.onclick = function (){
        if (armDuplaImediataCheck.checked){
            campoArmDuplaImediataCheck.style.display = 'flex'
            armSimplesImediataCheck.checked = false
        }else{
            campoArmDuplaImediataCheck.style.display = 'none'
        }
    }
    armSimplesImediataCheck.onclick = function(){
        if (armSimplesImediataCheck.checked){
            armDuplaImediataCheck.checked = false
            campoArmDuplaImediataCheck.style.display = 'none'
        }
    }
}
main()



// var botao = document.getElementById("btnArmLong")
// var valor = document.getElementById("alturaViga")
// var valores = document.getElementsByName("entradasArmLong")

// botao.onclick = function (){
//     let flaga = false
//     for(let i = 0; i <valores.length ; i++){
        
//         if(valores[i].value ==="" || isNaN(parseFloat(valores[i].value))){
//             valores[i].style.backgroundColor = "#ffdddd"
//             flaga = true
            
//         }else {
//             valores[i].style.backgroundColor = "#ecf5ff"
//         }
//     }
//     (flaga ? alert("preencha os campos marcado de forma correta") : null)
    
// }




