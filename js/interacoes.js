var teste = document.getElementById('calculoDaArmlong');
var checar = document.getElementById('ArmLong');

var condicionalMomCalc = document.getElementById('condmomentocalc');
var divMomCalc = document.getElementById('momentoDeCalcInput');

var condicionalMomAtuante = document.getElementById('condmomentoatuan');
var divMomAtua = document.getElementById('momAtuante');

var divMArcacao = document.getElementsByClassName("alinamentoInputs")[0];

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
        caixa1.style.display = "flex"
        condicional2.checked =false
        caixa2.style.display = "none"
    }else {
        caixa1.style.display = "none"
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

var btn = document.getElementById('calculaDimen');
function main(){
    checar.onclick = function (){
        mostrarValor();
        
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
}
main()

var botao = document.getElementById("btnArmLong")
var valor = document.getElementById("alturaViga")
var valores = document.getElementsByName("entradasArmLong")

botao.onclick = function (){
    let flaga = false
    for(let i = 0; i <valores.length ; i++){
        
        if(valores[i].value ==="" || isNaN(parseFloat(valores[i].value))){
            valores[i].style.backgroundColor = "#ffdddd"
            flaga = true
            
        }else {
            valores[i].style.backgroundColor = "#ecf5ff"
        }
    }
    (flaga ? alert("preencha os campos marcado de forma correta") : null)
    
}

